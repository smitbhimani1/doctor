import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/doctor1.jpeg";
import profile2 from "../Assets/dr13.webp";
// import profile3 from "../Assets/profile-3.png";
// import profile4 from "../Assets/profile-4.png";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Doctors</span>
        </h3>

        <p className="dt-description">
          Meet our exceptional team of specialist doctors, dedicated to
          providing top-notch healthcare services at Health Plus. Trust in their
          knowledge and experience to lead you towards a healthier and happier
          life.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Dr. Prakash Bhatt"
          title="MD Medicine, DNB Neurology, MRCP(UK)"
          stars="4.9"
          reviews="1800"
        />
        <DoctorCard
          img={profile2}
          name="Dr. Kirti Bhatt"
          title="MBBS, FICN"
          stars="4.8"
          reviews="700"
        />
      </div>
    </div>
  );
}

export default Doctors;
