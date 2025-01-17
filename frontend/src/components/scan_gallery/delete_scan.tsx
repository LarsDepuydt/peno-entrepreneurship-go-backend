import {
  deleteScanById,
  getAllPatients,
  getAllScans,
} from '@/gen/proto/threedoclusion/v1/service-ScanService_connectquery';
import { useQuery } from '@tanstack/react-query';

import styleB from '@/styles/Buttons.module.css';
import styles from '@/styles/Modal.module.css';

import { useState } from 'react';
import { queryClient } from '@/pages/_app';

export default function DeleteButton({ scanID }: { scanID: number }) {
  const [modal, setModal] = useState(false);
  // modal is not open at first

  const toggleModal = () => setModal(!modal); // change state f -> t and t -> f

  const deleteScan = () => {
    refetch();
    console.log('scan is deleted');
    setModal(!modal);
  };

  const refreshKey = getAllScans.useQuery().queryKey;
  const { data, refetch } = useQuery(
    deleteScanById.useQuery({ id: scanID }).queryKey,
    deleteScanById.useQuery({ id: scanID }).queryFn,
    {
      enabled: false,
      onSuccess: () => queryClient.refetchQueries(refreshKey),
    }
  );

  return (
    <>
      <div>
        <button type="button" className={styleB.relu_btn} id={styleB.deleteIcon} onClick={toggleModal} />
      </div>

      {modal && (
        <div className={styles.modal}>
          <div className={styles.overlay}></div>
          <div className={styles.modal_content}>
            <div className={styles.login_box + ' p-3'}>
              <div className={styles.exp_text}>
                Are you sure you want to delete this scan? Deleting is a <u>permanent action</u> and can not be undone.
              </div>
              <div className={styles.spacingbtn}>
                <button type="button" className={styleB.relu_btn} onClick={toggleModal}>
                  No, go back
                </button>
                <button type="button" className={styleB.relu_btn} onClick={deleteScan}>
                  Yes, I am sure
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
