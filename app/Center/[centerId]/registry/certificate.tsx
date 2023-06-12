// Giấy chứng nhận kiểm định
'use client'

import React, { useEffect, useState } from "react"
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet, Font, Image } from '@react-pdf/renderer';

Font.register({
  family: 'Times News Roman',
  fonts: [
    { src: '/times.ttf', fontWeight: 400, fontStyle: 'normal' },
    { src: '/timesi.ttf', fontWeight: 400, fontStyle: 'italic' },
    { src: '/timesbd.ttf', fontWeight: 700, fontStyle: 'bold' },
    { src: '/timesbi.ttf', fontWeight: 700, fontStyle: 'bold-italic' },
  ]
})

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  section: {
    margin: 18,
    padding: 14,
    flexGrow: 1,
    border: '1px solid black',
  },
  bigtitle: {
    fontSize: 16,
    marginTop: 50,
    textAlign: 'center',
    fontFamily: 'Times News Roman',
    marginBottom: 2,
    fontStyle: 'bold'
  },
  title: {
    fontSize: 13,
    textAlign: 'center',
    fontFamily: 'Times News Roman',
    marginBottom: 3,
    marginTop: 7,
    fontStyle: 'bold'
  },
  subtitle: {
    fontSize: 13,
    textAlign: 'center',
    fontFamily: 'Times News Roman',
    marginBottom: 5,
    fontStyle: 'italic'
  },
  normal_text: {
    fontSize: 13,
    textAlign: 'justify',
    fontFamily: 'Times News Roman',
    marginBottom: 2,
  },
  italic_text: {
    fontSize: 12,
    textAlign: 'justify',
    fontFamily: 'Times News Roman',
    fontStyle: 'italic',
    marginBottom: 2,
  },
  row: { display: "flex", flexDirection: "row", width: "100%"},
  column: { display: "flex", flexDirection: "column", flexGrow: 1 },
});

const data = {
  seires: '23940',
  vehicle: {
    registration_number: '29C-12345',
    vehicle_inpection_no: '123456789',
    type: 'xe ô tô tải',
    mark: 'HINO',
    model_code: 'FG8JPSA',
    engine_no: 'J08E-123456',
    chassis_no: '53480534',
    manudacture_year: '2019',
    country: 'Nhật Bản',
    life_time: '2050',
    commercial_use: true,
    modification: false,
  },
  specification: {
    wheel_formular: '4x2',
    wheel_tread: '1.750/1.650',
    overall_dimension: '6.000 x 2.490 x 2.900',
    inside_cargo_dimension: '4.400 x 2.300 x 2.100',
    wheel_base: '3.400',
    kerb_mass: '4.000',
    payload: '3000/3500',
    towed_mass: '3000/3500',
    total_mass: '6000/7000',
    seats: '4',
    stood: '2',
    laying: '0',
    max_rpm: '2.500',
    engine_displacement: '7684',
  },
  tires: [
    {
      tires_no: '6',
      tire_size: '8.25',
      axle: '2',
    }
  ],
  datetime: {
    location: 'Hà Nội',
    day: '12',
    month: '06',
    year: '2023',
  },
  valid_until: '12/06/2025',
  image_url: '',
  tachograph: true,
  camera: true,
  without_stamp: false,
  notes: '',
  code_number: '132353465'
}

const Certificate = () => {

  return (
    <Document>
      <Page size="A5" style={styles.page} id="page1">
        <View style={styles.section}>
          <Text style={[styles.title, { marginBottom: 3 }]}>BỘ GIAO THÔNG VẬN TẢI</Text>
          <Text style={[styles.title, { textDecoration: 'underline' }]}>CỤC ĐĂNG KIỂM VIỆT NAM</Text>
          <Text style={[styles.normal_text, { textAlign: 'center', marginBottom: 30 }]}>
            MOT - VIETNAM REGISTER
          </Text>
          <Text style={[styles.bigtitle, { color: 'red' }]}>GIẤY CHỨNG NHẬN KIỂM ĐỊNH</Text>
          <Text style={[styles.title, { marginBottom: 1, color: 'red' }]}>AN TOÀN KỸ THUẬT VÀ BẢO VỆ MÔI TRƯỜNG</Text>
          <Text style={[styles.title, { color: 'red' }]}>PHƯƠNG TIỆN GIAO THÔNG CƠ GIỚI ĐƯỜNG BỘ</Text>
          <Text style={[styles.normal_text, { textAlign: 'center', fontSize: 11 }]}>PERIODICAL INSPECTION CERTIFICATE</Text>
          <Text style={[styles.normal_text, { textAlign: 'center', fontSize: 11 }]}>OF MOTOR VEHICLE FOR COMPLIANCE WITH TECHINCAL SAFETY</Text>
          <Text style={[styles.normal_text, { textAlign: 'center', fontSize: 11 }]}>AND ENVIRONMENTAL PROTECTION REQUIREMENTS</Text>
          <Text style={[styles.bigtitle, { color: 'red' }]}>Số seri <Text style={{ fontStyle: 'italic' }}>(No.)</Text>: {data.seires}</Text>
        </View>
      </ Page>
      <Page size='A5' style={styles.page} id="page2">
        <View style={styles.section}>
          <Text style={styles.title}>1. PHƯƠNG TIỆN <Text style={{ fontStyle: 'italic', fontSize: 12 }}>(VEHICLE)</Text></Text>
          <Text style={styles.normal_text}>
            Biển đăng ký
            <Text style={{ fontStyle: 'italic', fontSize: 12 }}> (Registration Number)</Text>
            : {data.vehicle.registration_number}.
          </Text>
          <Text style={styles.normal_text}>
            Số giấy kiểm định
            <Text style={{ fontStyle: 'italic', fontSize: 12 }}> (Vehicle Inspection No.)
            </Text>: {data.vehicle.vehicle_inpection_no}.
          </Text>
          <Text style={styles.normal_text}>
            Loại phương tiện
            <Text style={{ fontStyle: 'italic', fontSize: 12 }}> (Type)
            </Text>: {data.vehicle.type}.
          </Text>
          <Text style={styles.normal_text}>
            Nhãn hiệu
            <Text style={{ fontStyle: 'italic', fontSize: 12 }}> (Mark)</Text>
            : {data.vehicle.mark}.
          </Text>
          <Text style={styles.normal_text}>
            Số loại
            <Text style={{ fontStyle: 'italic', fontSize: 12 }}> (Model Code)
            </Text>: {data.vehicle.model_code}.
          </Text>
          <Text style={styles.normal_text}>
            Số máy
            <Text style={{ fontStyle: 'italic', fontSize: 12 }}> (Engine Number)
            </Text>: {data.vehicle.engine_no}.
          </Text>
          <Text style={styles.normal_text}>
            Số khung
            <Text style={{ fontStyle: 'italic', fontSize: 12 }}> (Chassis Number)
            </Text>: {data.vehicle.chassis_no}.
          </Text>
          <Text style={styles.normal_text}>
            Năm, Nước sản xuất
            <Text style={{ fontStyle: 'italic', fontSize: 12 }}> (Manufactured Year and Country)
            </Text>:
          </ Text>
          <Text style={styles.normal_text}>
            {data.vehicle.manudacture_year} - {data.vehicle.country}.
          </Text>
          <Text style={styles.normal_text}>
            Thời hạn sử dụng
            <Text style={{ fontStyle: 'italic', fontSize: 12 }}> (Lifetime Limit to)</Text>: {data.vehicle.life_time}.
          </Text>
          <Text style={styles.normal_text}>
            Kinh doanh vận tải <Text style={{ fontStyle: 'italic', fontSize: 12 }}>(Commercial Use)</Text>: {data.vehicle.commercial_use ? 'Có' : 'Không'}.
          </Text>
          <Text style={styles.normal_text}>
            Cải tạo <Text style={{ fontStyle: 'italic', fontSize: 12 }}>(Modification)</Text>: {data.vehicle.modification ? 'Có' : 'Không'}.
          </Text>
          <Text style={styles.title}>
            2. THÔNG SỐ KỸ THUẬT <Text style={{ fontStyle: 'italic', fontSize: 12 }}>(SPECIFICATIONS)</Text>
          </Text>
          <Text style={styles.normal_text}>
            Công thức bánh xe <Text style={{ fontStyle: 'italic', fontSize: 12 }}>(Wheel Formular)</Text>: {data.specification.wheel_formular}.
          </Text>
          <Text style={styles.normal_text}>
            Vết bánh xe <Text style={{ fontStyle: 'italic', fontSize: 12 }}>(Wheel Tread)</Text>: {data.specification.wheel_tread} (mm).
          </Text>
          <Text style={styles.normal_text}>
            Kích thước bao <Text style={{ fontStyle: 'italic', fontSize: 12 }}>(Overall Dimension)</Text>: {data.specification.overall_dimension} (mm).
          </Text>
          <Text style={styles.normal_text}>
            Kích thước lòng thùng xe <Text style={{ fontStyle: 'italic', fontSize: 12 }}>(Inside cargo Container Dimensions)</Text>:
          </Text>
          <Text style={styles.normal_text}>
            {data.specification.inside_cargo_dimension} (mm).
          </Text>
          <Text style={styles.normal_text}>
            Chiều dài cơ sở <Text style={{ fontStyle: 'italic', fontSize: 12 }}>(Wheel Base)</Text>: {data.specification.wheel_base} (mm).
          </Text>
          <Text style={styles.normal_text}>
            Khối lượng bản thân <Text style={{ fontStyle: 'italic', fontSize: 12 }}>(Kerb Mass)</Text>: {data.specification.kerb_mass} (kg).
          </Text>
          <Text style={styles.normal_text}>
            Khối lượng hàng OC theo TK/CP TGGT <Text style={{ fontStyle: 'italic', fontSize: 12 }}>(Payload)</Text>: {data.specification.payload} (kg).
          </Text>
          <Text style={styles.normal_text}>
            Khối lượng kéo theo TK/CP TGGT <Text style={{ fontStyle: 'italic', fontSize: 12 }}>(Towed Mass)</Text>: {data.specification.towed_mass} (kg).
          </Text>
          <Text style={styles.normal_text}>
            Khối lượng toàn bộ theo TK/CP TGGT <Text style={{ fontStyle: 'italic', fontSize: 12 }}>(Total Mass)</Text>: {data.specification.total_mass} (kg).
          </Text>
          <Text style={styles.normal_text}>
            Số người cho phép chở: chỗ ngồi: {data.specification.seats}, chỗ đứng: {data.specification.stood}, chỗ nằm: {data.specification.laying}.
          </Text>
          <Text style={styles.italic_text}>
            (Permissible No. of Pers Carried: seats, stood place, laying place)
          </Text>
          <Text style={styles.normal_text}>
            Công suất lớn nhất/Tốc độ quay<Text style={{ fontStyle: 'italic', fontSize: 12 }}>(Max. Speed)</Text>: {data.specification.max_rpm} Ps; Mã lực; kW/v/ph.
          </Text>
          <Text style={styles.normal_text}>
            Thể tích làm việc của động cơ <Text style={{ fontStyle: 'italic', fontSize: 12 }}>(Engine Displacement)</Text>: {data.specification.engine_displacement}.
          </Text>
          <Text style={[styles.normal_text, { marginTop: 5 }]}>
            Số seri <Text style={{ fontStyle: 'italic', fontSize: 12 }}>(No.)</Text>: {data.seires}
          </Text>
        </View>

      </Page>
      <Page size="A5" style={styles.page} id="page3">
        <View style={styles.section}>
          <Text style={styles.normal_text}>
            Số lượng lốp/cỡ lốp/trục
            <Text style={{ fontStyle: 'italic', fontSize: 12 }}> (The Number of Tires/Tire Size/Axle)</Text>
          </Text>
          {data.tires.map((tire, index) => (
            <Text style={styles.normal_text} key={index}>
              {index + 1}: {tire.tires_no}; {tire.tire_size} - {tire.axle}
            </Text>
          ))}
          <Text style={[styles.normal_text, { textAlign: "right", fontStyle: 'italic' }]}>
            {data.datetime.location}, ngày {data.datetime.day} tháng {data.datetime.month} năm {data.datetime.year}
          </Text>
          <Text style={[styles.italic_text, { textAlign: "right" }]}>
            (Issued on: Day/Month/Year)
          </Text>
          <View style={[styles.row, {marginBottom: 50}]}>
              <View style={styles.column}>
                <Text style={styles.normal_text}>Số phiếu kiểm định</Text>
                <Text style={styles.italic_text}>(Inspection No.)</Text>
              </View>
              <View style={[styles.column, {alignItems: 'flex-end'}]}>
                <Text style={[styles.normal_text, {fontStyle: 'bold', textAlign: 'center'}]}>ĐƠN VỊ ĐĂNG KIỂM</Text>
                <Text style={[styles.italic_text, {textAlign: 'center'}]}>(INSPECTION CENTER)</Text>
              </View>
          </View>
          <Text style={[styles.normal_text, {marginTop: 50}]}>
              Có hiệu lực đến hết ngày <Text style={styles.italic_text}>(Valid unitl)</Text>: {data.valid_until}
          </Text>
          {/* <Image src={data.image_url} style={{width: '100%', maxHeight: '100'}} /> */}
            <Text style={[styles.normal_text, {marginTop: 200}]}>Có thiết bị giám sát hành trình
              <Text style={styles.italic_text}> (Equipped with tachograph)</Text>
              : {data.tachograph ? 'Có' : 'Không'}.
            </Text>
            <Text style={styles.normal_text}>Có lắp camera
              <Text style={styles.italic_text}> (Equipped with camera)</Text>
              : {data.camera ? 'Có' : 'Không'}.
            </Text>
            <Text style={styles.normal_text}>Xe không được cấp Tem kiểm định
              <Text style={styles.italic_text}> (Vehicle not issued with inspection stamp)</Text>
              : {data.without_stamp ? 'Có' : 'Không'}.
            </Text>
            <Text style={styles.normal_text}>Ghi chú
              <Text style={styles.italic_text}> (Notes)</Text>
              : {data.notes}
            </Text>
            <Text style={[styles.normal_text, {marginTop: 20, fontSize: 12}]}>{data.code_number}</Text>
        </View>
      </Page>
      <Page size="A5" style={styles.page} id="page4">
        <View style={styles.section}>
          <Text style={styles.title}>CHỦ PHƯƠNG TIỆN, LÁI XE CẦN BIẾT</Text>
          <Text style={styles.subtitle}>Vehicle onwers, drivers are to be aware of the following:</Text>
          <Text style={styles.normal_text}>
            1. Khi tham gia giao thông phải mang theo Giấy chứng nhận kiểm định.
            Nộp lại Giấy chứng nhận kiểm định và Tem kiểm định khi có thông báo thu hồi của các đơn vị đăng kiểm.
          </Text>
          <Text style={styles.italic_text}>
            When operating a vehicle in traffic, the certificate of inspection must be displayed.
            Return certificate and inspection sticker when receiving a withdrawal notice from the Inspection Center.
          </Text>
          <Text style={styles.normal_text}>
            2. Lái xe khi lưu hành qua cầu, hầm đường bộ phải tuân thủ các biển báo hiệu đường bộ đặt trước công trình.
          </Text>
          <Text style={styles.italic_text}>
            When passing the bridges, road tunnels, drivers must comply with road warning signs put forward its.
          </Text>
          <Text style={styles.normal_text}>
            3. Thực hiện bảo dưỡng, sửa chữa nhằm duy trì tình trạng kỹ thuật của xe giữa hai kỳ kiểm định.
          </Text>
          During two consecutive inspections, perform maintenance and repairs to maintain the vehicle's technical condition.
          <Text style={styles.normal_text}>
            4. Khi có thay đổi thông tin hành chính, thông số kỹ thuật phải đến Đơn
            vị đăng kiểm để được hướng dẫn làm thủ tục ghi nhận thay đổi.
          </Text>
          <Text style={styles.italic_text}>
            When roaming, transfer of vehicle ownership, renovation, modification of frame (chassis) or changing of engine No,
            the concerned Inspection Center (Vietnam Register) should be notified for instructions and the required procedures are to be followed.
          </Text>
          <Text style={styles.normal_text}>
            5. Xe cơ giới bị tai nạn giao thông đến mức không đảm bảo an toàn kỹ thuật và bảo vệ môi trường theo quy định phải sửa chữa,
            khắc phục và đến Đơn vị đăng kiểm để kiểm định lại.
          </Text>
          <Text style={styles.italic_text}>
            A motor vehicle which is damaged by accident and the requirements for technical safety and environment protection are not assured,
            is to be repaired and brought for re-inspection at an Inspection Center.
          </Text>
          <Text style={styles.normal_text}>6. Giấy chứng nhận kiểm định không sử dụng làm căn cứ khi chuyển nhượng phương tiện.</Text>
          <Text style={styles.italic_text}>A certificate of inspection should not be used as a basic for transferring vehicle.</Text>
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
          <PDFDownloadLink document={<Certificate />} fileName="Certificate.pdf">
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