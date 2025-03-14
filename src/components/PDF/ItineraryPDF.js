import React from "react";
import { Document, Page, View, Text, Image, StyleSheet, ScrollView } from "@react-pdf/renderer";
import PDFHeader from "./PDFHeader";
import PDFFooter from "./PDFFooter";
import ItineraryDay from "./ItineraryDay";
import Accommodations from "./Accommodations";

const styles = StyleSheet.create({
  page: { position: "relative", fontSize: 12, padding: 0 }, // ✅ Remove padding so image fits

  // ✅ Background Image: Full Page Cover
  backgroundImage: { 
    position: "absolute", 
    top: 0, 
    left: 0, 
    width: "100%", 
    height: "100%", 
    zIndex: -1 
  },

  content: { padding: 20 }, // ✅ Add padding back for content

  title: { fontSize: 32, fontWeight: "bold", color: "rgb(79, 189, 178)", marginBottom: 30, marginTop: 20, fontFamily: "Times-Roman", },
  logo: { width: 80, height: 50, marginBottom: 10, alignSelf: "center", marginLeft: 5 },
  subtitle:{ fontSize: 20, textDecoration:"underline",fontWeight: "bold", marginBottom: 10, marginTop: 10, fontFamily: "Times-Roman" },
  section: { paddingLeft: 10,  },

  container: {
    paddingBottom:20, 
    width: "70%",  // ✅ Takes only 60% of the page width
  },

  row: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    marginBottom: 10, 
  },

  left: { 
    textAlign: "left", 
    width: "50%",  // ✅ Labels take 20% inside 60% container
    paddingBottom: 5,  
    paddingRight: 10,  
  },  

  right: { 
    textAlign: "right", 
    width: "40%",  // ✅ Values take 30% inside 60% container
    paddingBottom: 5,  
    textAlign: "left",
  },
  smallSeparator: { 
    borderBottom: "2px solid black",  
    width: "60%",  // ✅ 30% width
    alignSelf: "right",  // ✅ Centered horizontally
    marginBottom: 10,  
  },
  date: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  dayContainer: {
    marginBottom: 2,
    borderWidth: 1,
    borderColor: '#ddd',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
  },
  dayHeader: {
    backgroundColor: '#2b7983',
    padding: 10,
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayText: {
    fontSize: 18,
  },
  details: {
    padding: 10,
    // backgroundColor: '#f0f8f8',
    display: 'flex',
    gap:5,

  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#31707C',
    marginBottom: 10,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F1F8F8',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    borderColor: '#31707C',
    borderWidth: 1
  },
  leftColumn: {
    flexDirection: 'row',
    flex: 2
  },
  nightBox: {
    backgroundColor: '#D2EDF4',
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  nightNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#31707C'
  },
  hotelText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2A4A58'
  },
  mealPlan: {
    color: '#0077B6',
    fontWeight: 'bold'
  },
  roomType: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  roomInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
  roomBox: {
    backgroundColor: '#D2EDF4',
    padding: 6,
    borderRadius: 8,
    marginRight: 10
  },
  roomCount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#31707C'
  },
  adultsText: {
    fontSize: 16,
    color: '#2A4A58'
  },
  imageContainer: {
    width: '40%',
    height: 120,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    alignItems: 'center'
  },
  hotelName: {
    color: 'white',
    fontWeight: 'bold'
  },
  hotelSubText: {
    color: 'white',
    fontSize: 12
  },
  text: { marginBottom: 5 },
  table: { display: "flex", flexDirection: "column", marginTop: 10 },
  tableRow: { flexDirection: "row", borderBottom: "1pt solid #000" },
  tableCell: { padding: 5, flex: 1, borderRight: "1pt solid #000" },
  footer: { marginTop: 10, textAlign: "center", fontSize: 10, color: "#888" },
  imageRight: { 
    width: "30%", 
    height: "95vh", 
    marginLeft: 10,  // Creates space from the text
    alignSelf: "flex-start", // Ensures image aligns at the top
  }
});

const ItineraryPDF = ({ data }) => (
  <Document>
    {/* Cover Page with Full Background Image */}
    <Page size="A4" style={styles.page}>
      
      {/* ✅ Full Page Background Image */}
        <Image src={data.companyImages.stateBackgroundImage} style={styles.backgroundImage} />
    
        {/* ✅ Header */}
      <Image src={data.companyImages.companyBackgroundImage} style={styles.backgroundImage} />

      {/* ✅ Header */}
      {/* <PDFHeader companyInfo={data.companyInfo} /> */}

      {/* ✅ Traveller Information */}
      <View style={styles.section}>

    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
      {/* Left Side: Your Existing Content (Unchanged) */}
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
        <Text style={styles.title}>Travel Information</Text>
          <Text style={styles.subtitle}>Guest Information</Text>

          <View style={styles.row}>
            <Text style={styles.left}>Guest Name</Text>
            <Text style={styles.right}>{data.travellerDetails.guestName}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.left}>Arrival</Text>
            <Text style={styles.right}>{data.travellerDetails.arrivalDate}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.left}>Contact</Text>
            <Text style={styles.right}>{data.travellerDetails.contactNumber}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.left}>Number of Adults</Text>
            <Text style={styles.right}>{data.travellerDetails.adults}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.left}>Number of Children</Text>
            <Text style={styles.right}>
              {data.travellerDetails.children} - [{data.travellerDetails.childAge.map(age => `${age} yrs`).join(", ")}]
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.left}>Meal Plan</Text>
            <Text style={styles.right}>{data.travellerDetails.mealPlan}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.left}>Vehicles</Text>
            <Text style={styles.right}>{data.travellerDetails.vehicle[0]?.name} x {data.travellerDetails.vehicle[0]?.count}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.left}>Vehicle Type</Text>
            <Text style={styles.right}>{data.travellerDetails.vehicle[0]?.type}</Text>
          </View>
        </View>

        <View style={styles.smallSeparator} />

        <View style={styles.container}>
          <Text style={styles.subtitle}>Our Contact</Text>

          <View style={styles.row}>
            <Text style={styles.left}>Consultant Name</Text>
            <Text style={styles.right}>{data.consultantInfo.consultantName}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.left}>Contact</Text>
            <Text style={styles.right}>{data.consultantInfo.contact}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.left}>Email</Text>
            <Text style={styles.right}>{data.consultantInfo.email}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.left}>Address</Text>
            <Text style={styles.right}>90ft {data.consultantInfo.address}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.left}>Company Contact</Text>
            <Text style={styles.right}>{data.companyInfo.contact}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.left}>Company Email</Text>
            <Text style={styles.right}>{data.companyInfo.email}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.left}>Company Website</Text>
            <Text style={styles.right}>{data.companyInfo.website}</Text>
          </View>
        </View>
      </View>

      {/* Right Side: Image */}
      <Image src={data.companyImages.defaultImage} style={styles.imageRight} />
    </View>
  </View>
</Page>

<Page>
  <View style={styles.section}>
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
      {/* Left Side: Itinerary Details (Full Width for Consistency) */}
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.title}>Overview</Text>
          <Text style={styles.subtitle}>
            Itinerary for <Text style={styles.bold}>7 Nights & 8 Days</Text>
          </Text>
          <Text style={styles.date}>Arrival: 10/05/2025    Departure: 17/05/2025</Text>

          {data.itineraryDetails?.map((day, index) => (
            <View key={index} style={styles.dayContainer}>
              <View style={styles.dayHeader}>
                <Text style={styles.dayText}>Day {day.dayNumber}</Text>
              </View>
              <View style={styles.details}>
                <Text style={styles.text}>
                  <Text style={styles.bold}>Sightseeing:</Text> {day.destinations[0]?.destinationName}
                </Text>
                <Text style={styles.text}>
                  <Text style={styles.bold}>Night Stay:</Text> {day.hotelName}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Right Side: Image */}
      <Image src={data.companyImages.defaultImage} style={styles.imageRight} />
    </View>
  </View>
</Page>


    
    {/* images */}
    {data.itineraryDetails?.map((day, index) => (
  <Page key={index}>
    {/* First row with two columns */}
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      {/* Left Column: Day Number & Night Stay Location */}
      <View style={{ width: '48%' }}>
        <Text style={styles.title}>Day {day.dayNumber}</Text>
        <Text style={styles.info}>Breakfast in {day.nightStayLocation}</Text>
        <Text>Date</Text>
      </View>

      {/* Right Column: Route & Hotel Name */}
      <View style={{ width: '20%', alignItems: 'flex-start' }}>
        <Text style={styles.info}>Route: {day.route}</Text>
        <Text style={styles.info}>Night Stay: {day.nightStayLocation}</Text>
      </View>

      <View style={{ width: '20%', alignItems: 'flext-start' }}>
        <Text style={styles.info}>Route: {day.route}</Text>
        <Text style={styles.info}> {day.hotelName}</Text>
    </View>
    </View>


    {/* Second row with two columns */}
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', marginTop: 10 }}>
      {day.destinations.map((destination, destIdx) => (
        <View key={destIdx} style={{ width: '100%', maxHeight:'60%' }}>
          {/* Left Column: Destination Image */}
          <Image source={{ uri: destination.destinationImages }} style={styles.image} />
          
          {/* Right Column: Destination Name & Attractions */}
            <Text>{destination.destinationName}</Text>
            <Text style={'minHeight: 50%'}>{destination.destinationDescription}</Text>
            <Text>Sightseeing: {destination.attractions.join(', ')}</Text>
        </View>
      ))}
    </View>
  </Page>
))}

{/* Accommodations */}
<Page>
<View>
      <Text style={styles.title}>Accommodations</Text>
      {data.accomodations.map((item, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.leftColumn}>

            <View>
              <Text style={styles.hotelText}>
                Night <Text style={styles.roomCount}>{item.night}</Text> at {item.hotelLocation}  |  Check-in {new Date(2025, 4, 9 + item.night).toDateString()}
              </Text>
              <Text style={styles.mealPlan}>Breakfast & Dinner Included</Text>
              <Text style={styles.roomType}>{item.roomType}</Text>
              <View style={styles.roomInfo}>
                <View style={styles.roomBox}>
                  <Text style={styles.roomCount}>{item.roomCount}</Text>
                </View>
                <Text style={styles.adultsText}>{item.adults} Adult(s)</Text>
              </View>
              <Text style={styles.includedText}>
                {item.aweb} AWEB (Adult With Extra Bed)
              </Text>
            </View>
          </View>

          {/* Right Column - Image */}
          <View key={index} style={styles.imageContainer}>
            <Image source={{ uri: item.images[0] }} style={styles.image} />
            <View style={styles.overlay}>
              <Text style={styles.hotelName}>{item.hotelName}</Text>
              <Text style={styles.hotelSubText}>
                OR OTHER SIMILAR HOTELS
              </Text>
            </View>
          </View>
        </View>
      ))}
    </View>
</Page>

{/* bank details */}
<Page size="A4" style={styles.page}>
        {/* Package Details Section */}
        <View style={styles.section}>
          <Text style={styles.title}>Package Details</Text>
          <Text style={styles.subtitle}>Traveller Details</Text>
          <Text style={styles.text}>Traveller Name: {data.travellerDetails.guestName}</Text>
          <Text style={styles.text}>Arrival Date: {data.travellerDetails.arrivalDate}</Text>
          <Text style={styles.text}>Arrival Location: {data.travellerDetails.arrivalLocation}</Text>
          <Text style={styles.text}>Departure Location: {data.travellerDetails.departureLocation}</Text>
          <Text style={styles.text}>Number of Adults: {data.travellerDetails.adults}</Text>
          <Text style={styles.text}>Meal Plan: {data.travellerDetails.mealPlan}</Text>
        </View>

        {/* Bank Details */}
        <View style={styles.section}>
          <Text style={styles.subtitle}>Bank Details</Text>
          <Text style={styles.text}>Account: {data.bankDetails[0].accountNumber}</Text>
          <Text style={styles.text}>Bank Name: {data.bankDetails[0].bankName}</Text>
          <Text style={styles.text}>Branch Name: {data.bankDetails[0].branchName}</Text>
          <Text style={styles.text}>IFSC Code: {data.bankDetails[0].ifscCode}</Text>
          <Text style={styles.text}>Holder Name: {data.bankDetails[0].holderName}</Text>
          <Text style={styles.text}>UPI Number: {data.bankDetails[0].upiNumber[0]}</Text>
          <Text style={styles.text}>UPI Address: {data.bankDetails[0].upiAddress[0]}</Text>
        </View>

        {/* QR Code */}
        <View style={styles.section}>
  <Image 
    src={data.qrDetails.qrImage}  
    style={{ width: 100, height: 100, alignSelf: "center" }} 
  />
</View>


        {/* Tour Cost Table */}
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Tour Details</Text>
            <Text style={styles.tableCell}>Total Tour Cost</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>{data.travellerDetails.packageNights} Nights / {data.travellerDetails.packageNights + 1} Days, {data.travellerDetails.adults} Adults</Text>
            <Text style={styles.tableCell}>Rs {data.pricingDetails.totalCost}</Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text>The Booking process will start after an advanced deposit of Rs 15%</Text>
          <Text>Kashmir Escapades</Text>
          <Text>Powered by Tripdocks</Text>
        </View>
      </Page>

      {/* inclusions and exclusions */}
      <Page size="A4" style={styles.page}>
  <View style={styles.section}>
    <Text style={styles.title}>Inclusions & Exclusions</Text>

    <View style={{ flexDirection: "row", marginTop: 10 }}>
      {/* Inclusions Column */}
      <View style={{ flex: 1, marginRight: 10 }}>
        <Text style={styles.subtitle}>Inclusions</Text>
        {data.inclusionExclusions.inclusions.map((item, index) => (
          <Text key={index} style={styles.bulletPoint}>• {item}</Text>
        ))}
      </View>

      {/* Exclusions Column */}
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={styles.subtitle}>Exclusions</Text>
        {data.inclusionExclusions.exclusions.map((item, index) => (
          <Text key={index} style={styles.bulletPoint}>• {item}</Text>
        ))}
      </View>
    </View>
  </View>
</Page>

{/* terms and conditions */}
<Page>
  <View style={styles.section}>
    <Text style={styles.title}>Terms & Conditions</Text>
    {data.termsAndConditions.termsAndConditions.map((item, index) => (
      <View key={index} style={styles.section}>
        <Text style={styles.subtitle}>{item.heading}</Text>
        {item.tncList.map((tnc, termIndex) => (
          <Text key={termIndex} style={styles.text}>• {tnc.terms}</Text>
        ))}
      </View>
    ))}
  </View>
</Page>

<Page>
  <Image src={data.companyImages.companyLastPageImage} style={styles.backgroundImage} />
</Page>






          
{/* ⚠️ Removed Pricing & Terms (To Be Added Back Later) */}
{/* <Pricing data={data.pricingDetails} /> */}
{/* <TermsConditions data={data.termsAndConditions} /> */}

{/* ✅ Footer */}
{/* <PDFFooter companyInfo={data.companyInfo} /> */}

{/* <Image src={data.companyImages.companyLastPageImage} style={styles.backgroundImage} /> */}

  </Document>
);

export default ItineraryPDF;
