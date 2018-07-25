import React from "react";
import RFID2 from "../components/RFIDInfo/RFID2.json";

export default {
   PlayerCard: function(){
       Object.keys(RFID2).forEach(function(x) {
            document.getElementById((("card1").value().trim()) + [x].image).push(RFIDCard1),
            document.getElementById((("card1").value().trim()) + [x].image).push(RFIDCard2)
       });
   }
};