// Giấy chứng nhận kiểm định
'use client'

import React, { useEffect, useState } from "react"
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

// Font.register({
//   family: 'Times News Roman',
//   src: 'https://fonts.cdnfonts.com/css/times-new-roman'
// })

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Times-Roman',
    marginBottom: 5,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Times-Roman',
    marginBottom: 5,
    fontStyle: 'italic'
  },
  normal_text: {
    fontSize: 12,
    textAlign: 'justify',
    fontFamily: 'Times-Roman',

  }
});

const Certificate = () => {

  return (
    <Document>
      <Page size="A4" orientation="landscape" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>CHỦ PHƯƠNG TIỆN, LÁI XE CẦN BIẾT</Text>
          <Text style={styles.subtitle}>Vehicle onwers, drivers are to be aware of the following:</Text>
          <Text style={styles.normal_text}>
            1. Khi tham gia giao thông phải mang theo Giấy chứng nhận kiểm định.
            Nộp lại Giấy chứng nhận kiểm định và Tem kiểm định khi có thông báo thu hồi của các đơn vị đăng kiểm.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>BỘ GIAO THÔNG VẬN TẢI</Text>
          <Text style={styles.title}>CỤC ĐĂNG KIỂM VIỆT NAM</Text>
        </View>
      </Page>
    </Document>
  );
};

export default function DownloadCertificate() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      {isClient ?
        <div className="btn">
          <PDFDownloadLink document={<Certificate />} fileName="somename.pdf">
            {({ blob, url, loading, error }) =>
              loading ? 'Đang tải tài liệu' : 'In giấy chứng nhận'
            }
          </PDFDownloadLink>
          {/* <Certificate /> */}
        </div>
        : null}
    </>
  )
}