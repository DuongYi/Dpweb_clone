import React, {
  useCallback, useEffect, useRef, useState
} from 'react';

import { useSnackbar } from 'notistack';
import { useParams } from 'react-router-dom';

import Page from 'src/components/Page';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import axios from 'src/utils/axios';

import ToolDetail from './components/ToolDetail';

function ToolView() {
  const [tool, setTool] = useState([]);

  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar } = useSnackbar();

  const { tid } = useParams();
  const toolRef = useRef(tool);

  const getTool = useCallback(async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/api/products/${tid}`
      );
      if (isMountedRef.current) {
        toolRef.current = response.data.data;
        setTool(response.data.data);
      }
    } catch (err) {
      enqueueSnackbar(err.response.status, { variant: 'error' });
    }
  }, [isMountedRef]);

  useEffect(() => {
    getTool();
  }, [getTool]);

  if (tool.length === 0) { return null; }

  return (
    <Page
      title={`${tool.name} | Tool | Dungpham.com.vn`}
    >
      <ToolDetail tool={tool} />
    </Page>
  );
}

export default ToolView;
