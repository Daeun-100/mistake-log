import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { FormFields } from '../types';

export const fetchLogs = async (): Promise<FormFields[]> => {
  const querySnapshot = await getDocs(collection(db, 'mistakes'));

  return querySnapshot.docs.map((doc) => {
    console.log(doc.data());
    return {
      id: doc.id, // Firestore 문서 ID 포함
      ...doc.data(),
      timestamp: doc.data().timestamp.toDate(),
    };
  }) as FormFields[];
};
