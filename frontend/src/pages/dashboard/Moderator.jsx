import { useEffect, useState } from 'react';
import AllowAccess from '../../components/AllowAccess';
import ForbiddenAccess from '../../components/ForbiddenAccess';

const Moderator = () => {
  const [isMod, setIsMod] = useState(false);
  useEffect(() => {
    const checkMod = async () => {
      const result = await fetch('http://localhost:8443/api/test/mod', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (result.status === 200) {
        setIsMod(true);
      } else {
        setIsMod(false);
      }
    };

    checkMod();
  }, []);

  return <div>{isMod ? <AllowAccess type="mod" /> : <ForbiddenAccess type="mod" />}</div>;
};

export default Moderator;
