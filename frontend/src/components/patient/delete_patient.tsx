import { deletePatientById, getAllPatients } from '@/gen/proto/threedoclusion/v1/service-ScanService_connectquery';
import { useQuery } from '@tanstack/react-query';

import styleB from '@/styles/Buttons.module.css';
import styles from '@/styles/Modal.module.css';

import { useState } from 'react';
import { queryClient } from '@/pages/_app';

export default function DeleteButton({ patientID }: { patientID: number }) {
  const [modal, setModal] = useState(false);
  // modal is not open at first

  const toggleModal = () => setModal(!modal); // change state f -> t and t -> f

  const deletePatient = () => {
    refetch();
    console.log('patient is deleted');
    setModal(!modal);
    refetch();
  };

  // const query = deletePatientById.useQuery({ id: patientID });
  // const { data, refetch } = useQuery(query.queryKey, query.queryFn, { enabled: false });

  const refreshKey = getAllPatients.useQuery().queryKey;
  const { data, refetch } = useQuery(
    deletePatientById.useQuery({ id: patientID }).queryKey,
    deletePatientById.useQuery({ id: patientID }).queryFn,
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
                Are you sure you want to delete this patient? Deleting is a <u>permanent action</u> and can not be
                undone.
              </div>
              <div className={styles.spacingbtn}>
                <button type="button" className={styleB.relu_btn} onClick={toggleModal}>
                  No, go back
                </button>
                <button type="button" className={styleB.relu_btn} onClick={deletePatient}>
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
