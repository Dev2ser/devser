import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { dropPlugin } from '@react-pdf-viewer/drop';
import { SEO, Header } from '../../components';
import Navigation from '../Portfolio/views/Navigation';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/drop/lib/styles/index.css';
import '../../utils/tailwind.generated.css';

export function PDFViewer() {
  const [url, setUrl] = useState();

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const dropPluginInstance = dropPlugin();

  const fileOnChange = (e) => {
    const files = e.target.files;
    files.length > 0 && setUrl(URL.createObjectURL(files[0]));
  };

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
      <div>
        <SEO title="PDF Viewer"/>
        <Navigation />
        <Header title="PDF Viewer" />
        <input
          type="file"
          accept=".pdf"
          onChange={fileOnChange}
          style={{ marginLeft: '10px', marginRight: '10px', marginTop: '10px' }}
        />
        <div
          style={{
            height: '750px',
            marginLeft: '10px',
            marginRight: '10px',
            // paddingBottom: '10px',
          }}
        >
          {url ? (
            <div
              style={{
                border: '1px solid rgba(0, 0, 0, 0.3)',
                height: '100%',
              }}
            >
              <Viewer
                fileUrl={url}
                plugins={[defaultLayoutPluginInstance, dropPluginInstance]}
              />
            </div>
          ) : (
            <div
              style={{
                alignItems: 'center',
                border: '2px dashed rgba(0, 0, 0, .3)',
                display: 'flex',
                fontSize: '2rem',
                height: '100%',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              No File Selected
            </div>
          )}
        </div>
      </div>
    </Worker>
  );
}
