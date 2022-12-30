import React, { useState, useEffect, Fragment } from 'react';
import { LocalizationContext, Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { dropPlugin } from '@react-pdf-viewer/drop';
import { localeSwitcherPlugin } from '@react-pdf-viewer/locale-switcher';
import { toolbarPlugin, ToolbarSlot } from '@react-pdf-viewer/toolbar';
import { SEO, Header, NavBar } from '../../components';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/drop/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';
import '../../utils/tailwind.generated.css';

import ar_AE from '@react-pdf-viewer/locales/lib/ar_AE.json';

export function PDFViewer() {
  const [url, setUrl] = useState();
  const [locale, setLocale] = useState('en_US');
  const [l10n, setL10n] = useState();
  const localizationContext = { l10n, setL10n };

  const localizations = {
    en_US: null,
    ar_AE: ar_AE,
  };

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const dropPluginInstance = dropPlugin();
  const localeSwitcherPluginInstance = localeSwitcherPlugin();
  const toolbarPluginInstance = toolbarPlugin();

  const { LocalePopover } = localeSwitcherPluginInstance;
  const { Toolbar } = toolbarPluginInstance;

  const switchToLocalization = (loc) => {
    setL10n(localizations[loc]);
    setLocale(loc);
  };

  const fileOnChange = (e) => {
    const files = e.target.files;
    files.length > 0 && setUrl(URL.createObjectURL(files[0]));
  };

  // https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js
  // https://unpkg.com/pdfjs-dist@2.7.570/build/pdf.worker.min.js
  return (
    <LocalizationContext.Provider value={localizationContext}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
        <div>
          <SEO title="PDF Viewer" />
          <NavBar />
          <Header title="PDF Viewer" />
          <input
            type="file"
            accept=".pdf"
            onChange={fileOnChange}
            style={{
              marginLeft: '10px',
              marginRight: '10px',
              marginTop: '10px',
            }}
          />
          <div
            style={{
              height: '750px',
              width: 'math(100% - 30px)',
              marginLeft: '10px',
              marginRight: '20px',
              // paddingBottom: '10px',
            }}
          >
            {url ? (
              <div
                style={{
                  border: '1px solid rgba(0, 0, 0, 0.3)',
                  height: '100%',
                  width: '100%',
                }}
              >
                <div
                  className="rpv-core__viewer"
                  style={{
                    border: '1px solid rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  <div
                    style={{
                      alignItems: 'center',
                      backgroundColor: '#eeeeee',
                      borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                      display: 'flex',
                      padding: '4px',
                    }}
                  >
                    <Toolbar>
                      {(props) => {
                        const {
                          CurrentPageInput,
                          Download,
                          EnterFullScreen,
                          GoToNextPage,
                          GoToPreviousPage,
                          NumberOfPages,
                          Open,
                          Print,
                          ShowProperties,
                          ShowSearchPopover,
                          Zoom,
                          ZoomIn,
                          ZoomOut,
                        } = props;
                        return (
                          <Fragment>
                            <Fragment>
                              <div style={{ padding: '0px 2px' }}>
                                <ShowSearchPopover />
                              </div>
                              <div style={{ padding: '0px 2px' }}>
                                <GoToPreviousPage />
                              </div>
                              <div
                                style={{
                                  padding: '0px 2px',
                                  width: '4rem',
                                }}
                              >
                                <CurrentPageInput />
                              </div>
                              <div style={{ padding: '0px 2px' }}>
                                / <NumberOfPages />
                              </div>
                              <div style={{ padding: '0px 2px' }}>
                                <GoToNextPage />
                              </div>
                              <div
                                style={{
                                  padding: '0px 2px',
                                  marginLeft: 'auto',
                                }}
                              >
                                <ZoomOut />
                              </div>
                              <div style={{ padding: '0px 2px' }}>
                                <Zoom />
                              </div>
                              <div style={{ padding: '0px 2px' }}>
                                <ZoomIn />
                              </div>
                              <div
                                style={{
                                  padding: '0px 2px',
                                  marginLeft: 'auto',
                                }}
                              >
                                <EnterFullScreen />
                              </div>
                              <div style={{ padding: '0px 2px' }}>
                                <Open />
                              </div>
                              <div style={{ padding: '0px 2px' }}>
                                <Download />
                              </div>
                              <div style={{ padding: '0px 2px' }}>
                                <Print />
                              </div>
                              <div style={{ padding: '0px 2px' }}>
                                <ShowProperties />
                              </div>
                              <div style={{ padding: '0px 2px' }}>
                                <LocalePopover
                                  initialLocale={locale}
                                  locales={{
                                    en_US: 'English',
                                    ar_AE: 'العربية',
                                  }}
                                  localizations={localizations}
                                  onUpdateLocalization={switchToLocalization}
                                />
                              </div>
                            </Fragment>
                          </Fragment>
                        );
                      }}
                    </Toolbar>
                  </div>
                  <div
                    style={{
                      flex: 1,
                      overflow: 'hidden',
                    }}
                  >
                    <Viewer
                      fileUrl={url}
                      plugins={[
                        // defaultLayoutPluginInstance,
                        dropPluginInstance,
                        localeSwitcherPluginInstance,
                        toolbarPluginInstance,
                      ]}
                    />
                  </div>
                </div>
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
    </LocalizationContext.Provider>
  );
}
