import * as React from "react"
import { HeadFC, Link, PageProps } from "gatsby"
import { Parallax } from "@react-spring/parallax"
import { Themed } from "@theme-ui/mdx"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import { UpDown, UpDownWide } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
import Svg from "@lekoarts/gatsby-theme-cara/src/components/svg"
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"

const NotFound = (_props: PageProps) => {
  React.useEffect(() => {
    google.load("drive-viewer", "1");

    function loadPDF(fileId) {
      var pdfViewer = new google.drive.viewer.PdfViewer(document.getElementById('pdfViewer'));
      pdfViewer.setViewerUrl('https://drive.google.com/file/d/' + fileId + '/preview');
      pdfViewer.setPdfUrl('https://drive.google.com/uc?export=download&id=' + fileId);
      pdfViewer.open();
    }

    // Panggil fungsi loadPDF dengan ID file PDF yang ingin ditampilkan
    loadPDF('1kc563mPIrjIYBtOvbGU5M-Nv_25b7P_F');
  }, []);

  return (
    <Layout>
      <Parallax pages={1}>
        <div>
          <Divider speed={0.2} offset={0} factor={1}>
            {/* Kode SVG dan elemen lainnya di sini */}
          </Divider>
          <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={0} factor={1}>
            <Inner>
              <Themed.h1>ICAO - Page not found</Themed.h1>
              <Themed.p>
                Go back to <Link to="/">homepage</Link>.
              </Themed.p>
            </Inner>
          </Content>
        </div>
      </Parallax>
    </Layout>
  );
}

export default NotFound

export const Head: HeadFC = () => <Seo title="404 - Not Found" />
