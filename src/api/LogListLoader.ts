import { useEffect } from 'react';
import { useSetAtom } from 'jotai';
import { logListAtom } from '../atom';
import { fetchLogs } from './fetchLogs';

const LogListLoader = () => {
  const setLogList = useSetAtom(logListAtom);

  useEffect(() => {
    const loadLogs = async () => {
      try {
        const logs = await fetchLogs();
        console.log(logs);
        setLogList(logs); // Atom 상태 업데이트
      } catch (error) {
        console.error('Error fetching logs:', error);
      }
    };

    loadLogs();
  }, [setLogList]);

  return null;
};

export default LogListLoader;
