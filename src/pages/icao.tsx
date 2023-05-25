import * as React from "react"
import { Link } from "gatsby"
import { Parallax } from "@react-spring/parallax"
import { Themed } from "@theme-ui/mdx"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import { UpDown, UpDownWide } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
import Svg from "@lekoarts/gatsby-theme-cara/src/components/svg"
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"

const PDFViewer = () => {
  React.useEffect(() => {
    const loadPDF = (fileId) => {
      const pdfViewer = new window.google.drive.viewer.PdfViewer(
        document.getElementById("pdfViewer")
      )
      pdfViewer.setViewerUrl(
        `https://drive.google.com/file/d/${fileId}/preview`
      )
      pdfViewer.setPdfUrl(
        `https://drive.google.com/uc?export=download&id=${fileId}`
      )
      pdfViewer.open()
    }

    // Panggil fungsi loadPDF dengan ID file PDF yang ingin ditampilkan
    loadPDF("1kc563mPIrjIYBtOvbGU5M-Nv_25b7P_F")
  }, [])

  return <div id="pdfViewer"></div>
}

const NotFound = () => (
  <Layout>
    <Parallax pages={1}>
      <div>
        <Divider speed={0.2} offset={0} factor={1}>
          {/* ... */}
        </Divider>
        <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={0} factor={1}>
          <Inner>
            <Themed.h1>ICAOICAOICAOICAO</Themed.h1>
            <Themed.p>
              Go back to <Link to="/">homepage</Link>.
            </Themed.p>
            <PDFViewer />
          </Inner>
        </Content>
      </div>
    </Parallax>
  </Layout>
)

export default NotFound
