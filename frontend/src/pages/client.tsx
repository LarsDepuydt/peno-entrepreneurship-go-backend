import { sendVR } from '@/gen/proto/threedoclusion/v1/service-ScanService_connectquery'
import { useQuery } from '@tanstack/react-query';
import { useState, useEffect, SetStateAction } from 'react';
import Cookies from 'js-cookie';
import styles from "@/styles/ClientPage.module.css"

import Image from 'next/image';
import reluLogo from '../../public/relu-logo-small.png';


function generateCode(): string {
  return Array.from({length: 8}, () => Math.floor(Math.random() * 10)).join('');
}


export default function ClientPage() {
    const [code, setCode] = useState(generateCode());
    const [displayCode, setDisplayCode] = useState('');

    var displaycode;

    let scanId = 111 // Should be generated by clicking on certain scan
    const [clientId, setClientId] = useState<number | undefined>(undefined);
    const [submitOK, setSubmitOK] = useState(false);
    
    const query = sendVR.useQuery({ clientId, scanId });
    const { data, refetch } = useQuery(query.queryKey, query.queryFn, { enabled: false });

    function afterSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      let codeInput = document.getElementById("code") as HTMLInputElement | null;
  
      if (codeInput){
        setClientId(parseInt(codeInput.value, 10));
      }
      setSubmitOK(true);
    }

    const handleRedirect = () => {
       if (submitOK){
        refetch();
        setSubmitOK(false);
       }
    };

    var cookieCode: string | undefined;
    useEffect(() => {
      if (typeof window !== 'undefined') {
        cookieCode = Cookies.get('clientcookie');
      }

      //const cookieCode = Cookies.get('clientcookie');
  
      if (!cookieCode) {
        const codeString: string = `${code}`;
        Cookies.set('clientcookie', codeString, { expires: 7, path: '/' });
        console.log('new code:', code);
        setDisplayCode(code);
      }
      else {
        setDisplayCode(cookieCode);
        console.log('your code already is:', cookieCode);
      }

      setClientId(parseInt(displayCode, 10));
      setSubmitOK(true);

    }, []);

  return (
    <div className={styles.container}>
      <Image className={styles.small_logo_log} src={reluLogo} alt="relu logo" />
      <h3 className={styles.h3}>{displayCode}</h3>
      <p className={styles.p}>Enter the code above in your VR headset.</p>
      <button id="redirect-button" onClick={handleRedirect} className={styles.btn}>Send to VR</button>
    </div>
    
  )
}

//old
/*
<div>
      <h1>Client Page</h1>
      <form onSubmit={afterSubmit}>
        Code: <input type="text" id="code" size={20} name="code"/><br/>
        <input type="submit" value="Submit"/> 
      </form>
      <button id="redirect-button" onClick={handleRedirect}>Send to VR</button>
    </div>
*/