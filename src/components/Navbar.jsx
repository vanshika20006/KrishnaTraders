import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

 const products = [
  {
    id: 1,
    name: "AQUA BLU(5T)",
    size: "12X12",
     price: 700,
    slug: "1"
  },
  {
    id: 2,
    name: "AQUA BLU(5T)",
    size: "15X15",
     price: 1050,
    slug: "2"
  },
  {
    id: 3,
    name: "AQUA BLU(5T)",
    size: "18X18",
     price: 1300,
    slug: "3"
  },
  {
    id: 4,
    name: "AQUA BLU(5T)",
    size: "18X24",
     price: 1800,
    slug: "4"
  },
  {
    id: 5,
    name: "AQUA BLU(5T)",
    size: "21X21",
     price: 1900,
    slug: "5"
  },
  {
    id: 6,
    name: "AQUA BLU(5T)",
    size: "24X24",
     price: 2150,
    slug: "6"
  },
  {
    id: 7,
    name: "AQUA BLU(5T)",
    size: "28X28",
     price: 3800,
    slug: "7"
  },
  {
    id: 8,
    name: "AQUA BLU(5T)",
    size: "30X30",
     price: 4400,
    slug: "8"
  },
  {
    id: 9,
    name: "AQUA BLU(5T)",
    size: "36X36",
     price: 9000,
    slug: "9"
  },
  {
  id: 10,
  name: "FRP (5T)",
  size: "18X36",
   price: 3400,
  slug: "F1"
},
{
  id: 11,
  name: "FRP (5T)",
  size: "24X24",
   price: 2050,
  slug: "F2"
},
{
  id: 12,
  name: "FRP (5T)",
  size: "24X30",
   price: 3800,
  slug: "F3"
},
{
  id: 13,
  name: "FRP (5T)",
  size: "24X36",
   price: 4000,
  slug: "F4"
},
{
  id: 14,
  name: "FRP (5T)",
  size: "30X30",
   price: 4000,
  slug: "F5"
},
{
  id: 15,
  name: "FRP (5T)",
  size: "36X36",
   price: 5600,
  slug: "F6"
},
{
  id: 16,
  name: "CLASSIC",
  size: "12X12",
   price: 180,
  slug: "21"
},
{
  id: 17,
  name: "CLASSIC",
  size: "15X15",
   price: 370,
  slug: "22"
},
{
  id: 18,
  name: "CLASSIC",
  size: "18X24",
   price: 620,
  slug: "23"
},
{
  id: 19,
  name: "CLASSIC",
  size: "21X21",
   price: 660,
  slug: "24"
},
{
  id: 20,
  name: "CLASSIC",
  size: "24X24",
   price: 920,
  slug: "25"
},
{
  id: 21,
  name: "LOCK",
  size: "18X24",
   price: 960,
  slug: "P1"
},
{
  id: 22,
  name: "LOCK",
  size: "21X21",
   price: 960,
  slug: "P2"
},
{
  id: 23,
  name: "LOCK",
  size: "24X24",
   price: 1200,
  slug: "P3"
},
{
  id: 24,
  name: "HEAVY (1T)",
  size: "18X24",
   price: 1300,
  slug: "E1"
},
{
  id: 25,
  name: "HEAVY (1T)",
  size: "21X21",
   price: 6200,
  slug: "E2"
},
{
  id: 26,
  name: "HEAVY (1T)",
  size: "24X24",
   price: 1520,
  slug: "E3"
},
{
  id: 27,
  name: "LDPE COVER",
  size: "12X12",
   price: 440,
  slug: "31"
},
{
  id: 28,
  name: "LDPE COVER",
  size: "18X18",
   price: 1000,
  slug: "32"
},
{
  id: 29,
  name: "LDPE COVER",
  size: "18X24",
   price: 1200,
  slug: "33"
},
{
  id: 30,
  name: "LDPE COVER",
  size: "24X24",
   price: 1450,
  slug: "34"
},
{
  id: 31,
  name: "LDPE COVER",
  size: "27X27",

   price: 1860,
  slug: "35"
},
{
  id: 32,
  name: "LDPE COVER",
  size: "30X30",
   price: 2700,
  slug: "36"
},
{
  id: 33,
  name: "HDP",
  size: "18X18",
   price: 900,
  slug: "41"
},
{
  id: 34,
  name: "HDP",
  size: "24X24",
   price: 1250,
  slug: "42"
},
{
  id: 35,
  name: "HDP",
  size: "18X24",
   price: 1000,
  slug: "43"
},
{
  id: 36,
  name: "HDP",
  size: "27X27",
   price: 1600,
  slug: "44"
},
{
  id: 37,
  name: "HDP",
  size: "30X30",
   price: 2500,
  slug: "45"
},
{
  id: 38,
  name: "CLASSIC",
  size: "16X18",
   price: 960,
  slug: "201"
},
{
  id: 39,
  name: "CLASSIC",
  size: "18X24",
   price: 1160,
  slug: "202"
},
{
  id: 40,
  name: "SILVER",
  size: "18X16",
   price: 1240,
  slug: "203"
},
{
  id: 41,
  name: "SILVER",
  size: "18X24",
   price: 1500,
  slug: "204"
},
{
  id: 42,
  name: "GOLD",
  size: "18X16",
   price: 1360,
  slug: "205"
},
{
  id: 43,
  name: "GOLD",
  size: "18X24",
   price: 1700,
  slug: "206"
},
{
  id: 44,
  name: "MIRROR",
  size: "18X16",
   price: 1500,
  slug: "207"
},
{
  id: 45,
  name: "MIRROR",
  size: "18X24",
   price: 1900,
  slug: "208"
},
{
  id: 46,
  name: "PRISM",
  size: "18X16",
   price: 1650,
  slug: "209"
},
{
  id: 47,
  name: "PRISM",
  size: "18X24",
   price: 2100,
  slug: "2010"
},
{
  id: 48,
  name: "DOLLAR",
  size: "24X24",
   price: 2600,
  slug: "2011"
},
{
  id: 49,
  name: "SQUARE",
  size: "18X16",
   price: 1700,
  slug: "2012"
},
{
  id: 50,
  name: "SQUARE",
  size: "18X24",
   price: 2200,
  slug: "2013"
},
{
  id: 51,
  name: "SILVER",
  size: "12X12",
  price: 960,
  slug: "2014"
},
{
  id: 52,
  name: "SILVER",
  size: "14X16",
  price: 960,
  slug: "2015"
},
{
  id: 53,
  name: "SILVER",
  size: "12X15",
  price: 960,
  slug: "2016"
},
{
  id: 54,
  name: "DOUBLE BOWL SS",
  size: "37X18",
  price: 3600,
  slug: "2017"
},
{
  id: 55,
  name: "DRAIN BOARD SS",
  size: "37X18",
  price: 3600,
  slug: "2018"
},
{
  id: 56,
  name: "HANDMADE SINK",
  size: "18X16X10",
  slug: "211"
},
{
  id: 57,
  name: "HANDMADE SINK",
  size: "24X18X10",
  slug: "212"
},
{
  id: 58,
  name: "HANDMADE GLOSSY",
  size: "24X18X10",
  slug: "213"
},
{
  id: 59,
  name: "HANDMADE GOLD",
  size: "24X18X10",
  slug: "214"
},
{
  id: 60,
  name: "HANDMADE ROSEGOLD",
  size: "24X18X10",
  slug: "215"
},
{
  id: 61,
  name: "HANDMADE BLACK",
  size: "24X18X10",
  slug: "216"
},
{
  id: 62,
  name: "DOUBLE BOWL BLACK",
  size: "37X18X10",
  slug: "217"
},
{
  id: 63,
  name: "DOUBLE BOWL",
  size: "37X18X10",
  slug: "218"
},
{
  id: 64,
  name: "DOUBLE BOWL",
  size: "45X20X10",
  slug: "219"
},
{
  id: 65,
  name: "DOUBLE BOWL",
  size: "32X18X10",
  slug: "2110"
},
{
  id: 66,
  name: "DRAIN BOARD",
  size: "37X18X10",
  slug: "2111"
},
{
  id: 67,
  name: "WHITE",
  size: "18X24",
  slug: "221"
},
{
  id: 68,
  name: "BROWN",
  size: "18X24",
  slug: "222"
},
{
  id: 69,
  name: "GREY",
  size: "24X18",
  slug: "223"
},
{
  id: 70,
  name: "BLACK",
  size: "24X18",
  slug: "224"
},
{
  id: 71,
  name: "GREY STONE",
  size: "24X18",
  slug: "225"
},
{
  id: 72,
  name: "PEACH IVORY",
  size: "24X18",
  slug: "226"
},
{
  id: 73,
  name: "IVORY SAND",
  size: "24X18",
  slug: "227"
},
{
  id: 74,
  name: "SNOW SAND",
  size: "24X18",
  slug: "228"
},
{
  id: 75,
  name: "ALL COLOUR",
  size: "37X18",
  slug: "231"
},
{
  id: 76,
  name: "ALL COLOUR",
  size: "37X18",
  slug: "241"
},
{
  id: 77,
  name: "POLO DESIGN SHORT BODY",
  size: "18X18",
  slug: "301"
},
{
  id: 78,
  name: "POLO DESIGN LONG BODY",
  size: "24X24",
  slug: "302"
},
{
  id: 79,
  name: "POLO DESIGN ANGLE COCK",
  size: "18X24",
  slug: "303"
},
{
  id: 80,
  name: "POLO DESIGN SINK COCK",
  size: "27X27",
  slug: "304"
},
{
  id: 81,
  name: "POLO DESIGN SWAN COCK",
  size: "30X30",
  slug: "305"
},
{
  id: 82,
  name: "POLO DESIGN TWO WAY BIB COCK",
  size: "18X18",
  slug: "306"
},
{
  id: 83,
  name: "POLO DESIGN TWO WAY ANGLE",
  size: "24X24",
  slug: "307"
},
{
  id: 84,
  name: "CRYSTAL DESIGN SHORT BODY",
  size: "18X18",
  slug: "311"
},
{
  id: 85,
  name: "CRYSTAL DESIGN LONG BODY",
  size: "24X24",
  slug: "312"
},
{
  id: 86,
  name: "CRYSTAL DESIGN ANGLE COCK",
  size: "18X24",
  slug: "313"
},
{
  id: 87,
  name: "CRYSTAL DESIGN SINK COCK",
  size: "27X27",
  slug: "314"
},
{
  id: 88,
  name: "CRYSTAL DESIGN SWAN COCK",
  size: "30X30",
  slug: "315"
},
{
  id: 89,
  name: "CRYSTAL DESIGN TWO WAY BIB COCK",
  size: "18X18",
  slug: "316"
},
{
  id: 90,
  name: "CRYSTAL DESIGN TWO WAY ANGLE",
  size: "24X24",
  slug: "317"
},
{
  id: 91,
  name: "CRYSTAL DESIGN FOAM FLOW S/B",
  size: "18X24",
  slug: "318"
},
{
  id: 92,
  name: "CRYSTAL DESIGN FOAM FLOW L/B",
  size: "24X24",
  slug: "319"
},
{
  id: 93,
  name: "CRYSTAL DESIGN PILLAR COCK",
  size: "18X24",
  slug: "3110"
},
{
  id: 94,
  name: "OPEL DESIGN(BLUE) SHORT BODY",
  size: "18X18",
  slug: "321"
},
{
  id: 95,
  name: "OPEL DESIGN(BLUE) LONG BODY",
  size: "24X24",
  slug: "322"
},
{
  id: 96,
  name: "OPEL DESIGN(BLUE) BIB COCK",
  size: "18X24",
  slug: "323"
},
{
  id: 97,
  name: "OPEL DESIGN(BLUE) SINK COCK",
  size: "27X27",
  slug: "324"
},
{
  id: 98,
  name: "OPEL DESIGN(BLUE) SWAN COCK",
  size: "30X30",
  slug: "325"
},
{
  id: 99,
  name: "OPEL DESIGN(BLUE) ANGLE COCK",
  size: "18X18",
  slug: "326"
},
{
  id: 100,
  name: "OPEL DESIGN(BLUE) TWO WAY BIB COCK",
  size: "24X24",
  slug: "327"
},
{
  id: 101,
  name: "RANDOM MODEL SHORT BODY",
  size: "24X24",
  slug: "331"
},
{
  id: 102,
  name: "RANDOM MODEL ITALIAN PILLAR",
  size: "18X24",
  slug: "332"
},
{
  id: 103,
  name: "MOSCOW MODEL SHORT BODY",
  size: "18X18",
  slug: "341"
},
{
  id: 104,
  name: "MOSCOW MODELLONG BODY",
  size: "24X24",
  slug: "342"
},
{
  id: 105,
  name: "BREZZA SHORT BODY",
  size: "18X18",
  slug: "401"
},
{
  id: 106,
  name: "BREZZA LONG BODY",
  size: "24X24",
  slug: "402"
},
{
  id: 107,
  name: "BREZZA ANGLE COCK",
  size: "18X24",
  slug: "403"
},
{
  id: 108,
  name: "BREZZA SINK COCK",
  size: "27X27",
  slug: "404"
},
{
  id: 109,
  name: "BREZZA SWAN COCK",
  size: "30X30",
  slug: "405"
},
{
  id: 110,
  name: "BREZZA TWO WAY BIB COCK",
  size: "18X18",
  slug: "406"
},
{
  id: 111,
  name: "BREZZA TWO WAY ANGLE",
  size: "24X24",
  slug: "407"
},
{
  id: 112,
  name: "BREZZA PILLAR COCK",
  size: "18X24",
  slug: "408"
},
{
  id: 113,
  name: "BREZZA PILLAR COCK 6",
  size: "27X27",
  slug: "409"
},
{
  id: 114,
  name: "BREZZA NOZZLE COCK",
  size: "30X30",
  slug: "4010"
},
{
  id: 115,
  name: "BREZZA MIXER WITH BEND",
  size: "18X18",
  slug: "4011"
},
{
  id: 116,
  name: "BREZZA FLUSH COCK (M)",
  size: "24X24",
  slug: "4012"
},
{
  id: 117,
  name: "BREZZA FLUSH COCK (HY)",
  size: "18X24",
  slug: "4013"
},
{
  id: 118,
  name: "BREZZA ANGLE (PROJECT)",
  size: "27X27",
  slug: "4014"
},
{
  id: 119,
  name: "ARYA HEAD DIVERTOR WITH PLATE",
  size: "18X18",
  slug: "411"
},
{
  id: 120,
  name: "ARYA HEAD TABLE TOP 13",
  size: "18X18",
  slug: "412"
},
{
  id: 121,
  name: "ARYA HEAD Spout M",
  size: "18X18",
  slug: "413"
},
{
  id: 122,
  name: "ARYA HEAD Spout HY",
  size: "18X18",
  slug: "414"
},
{
  id: 123,
  name: "JERRY SHORT BODY",
  size: "18X18",
  slug: "421"
},
{
  id: 124,
  name: "JERRY LONG BODY",
  size: "24X24",
  slug: "422"
},
{
  id: 125,
  name: "JERRY ANGLE COCK",
  size: "18X24",
  slug: "423"
},
{
  id: 126,
  name: "JERRY SINK COCK",
  size: "27X27",
  slug: "424"
},
{
  id: 127,
  name: "JERRY SWAN COCK",
  size: "30X30",
  slug: "425"
},
{
  id: 128,
  name: "JERRY TWO WAY BIB COCK",
  size: "18X18",
  slug: "426"
},
{
  id: 129,
  name: "JERRY TWO WAY ANGLE",
  size: "24X24",
  slug: "427"
},
{
  id: 130,
  name: "JERRY PILLAR COCK",
  size: "18X24",
  slug: "428"
},
{
  id: 131,
  name: "JERRY PILLAR COCK 6",
  size: "27X27",
  slug: "429"
},
{
  id: 132,
  name: "JERRY NOZZLE COCK",
  size: "30X30",
  slug: "4210"
},
{
  id: 133,
  name: "JERRY MIXER WITH BEND",
  size: "18X18",
  slug: "4211"
},
{
  id: 134,
  name: "VIVO CONCEALED VALVE",
  size: "18X18",
  slug: "431"
},
{
  id: 135,
  name: "VIVO ANGLE COCK",
  size: "24X24",
  slug: "432"
},
{
  id: 136,
  name: "VIVO FLUSH COCK",
  size: "18X24",
  slug: "433"
},
{
  id: 137,
  name: "EXTENSION NIPPLE 1",
  size: "1",
  slug: "501"
},
{
  id: 138,
  name: "EXTENSION NIPPLE 1.1/2",
  size: "1.1/2",
  slug: "502"
},
{
  id: 139,
  name: "EXTENSION NIPPLE 2",
  size: "2",
  slug: "503"
},
{
  id: 140,
  name: "EXTENSION NIPPLE 2.1/2",
  size: "2.1/2",
  slug: "504"
},
{
  id: 141,
  name: "EXTENSION NIPPLE 3",
  size: "3",
  slug: "505"
},
{
  id: 142,
  name: "EXTENSION NIPPLE 4",
  size: "4",
  slug: "506"
},
{
  id: 143,
  name: "EXTENSION NIPPLE 6",
  size: "6",
  slug: "507"
},
{
  id: 144,
  name: "HEX NIPPLE SS 1/2",
  size: "1/2",
  slug: "508"
},
{
  id: 145,
  name: "SANDWICH MODEL SHOWER",
  size: "4",
  slug: "511"
},
{
  id: 146,
  name: "SANDWICH MODEL SHOWER",
  size: "6",
  slug: "512"
},
{
  id: 147,
  name: "SANDWICH MODEL SHOWER",
  size: "8",
  slug: "513"
},
{
  id: 148,
  name: "SANDWICH MODEL SHOWER",
  size: "10",
  slug: "514"
},
{
  id: 149,
  name: "SANDWICH MODEL SHOWER",
  size: "12",
  slug: "515"
},
{
  id: 150,
  name: "CURVE MODEL SHOWER",
  size: "4",
  slug: "521"
},
{
  id: 151,
  name: "CURVE MODEL SHOWER",
  size: "6",
  slug: "522"
},
{
  id: 152,
  name: "CURVE MODEL SHOWER",
  size: "8",
  slug: "523"
},
{
  id: 153,
  name: "CURVE MODEL SHOWER",
  size: "10",
  slug: "524"
},
{
  id: 154,
  name: "CURVE MODEL SHOWER",
  size: "12",
  slug: "525"
},
{
  id: 155,
  name: "ABS SHOWER",
  size: "3",
  slug: "531"
},
{
  id: 156,
  name: "ABS SHOWER",
  size: "4",
  slug: "532"
},
{
  id: 157,
  name: "PTMT SHOWER",
  price: 0,
  inStock: true,
  size: "4",
  image: "ptmtshoower4.jpg",
  slug: "541"
},
{
  id: 158,
  name: "PTMT SHOWER",
  price: 0,
  inStock: true,
  size: "5",
  image: "ptmtshoower4.jpg",
  slug: "542"
},
{
  id: 159,
  name: "SS ROD MEDIUM",
  price: 0,
  inStock: true,
  size: "9",
  image: "medium9.jpg",
  slug: "5211"
},
{
  id: 160,
  name: "SS ROD HEAVY",
  price: 0,
  inStock: true,
  size: "9",
  image: "Heavy9.jpg",
  slug: "5212"
},
{
  id: 161,
  name: "SS ROD MEDIUM",
  price: 0,
  inStock: true,
  size: "12",
  image: "Medium12.jpg",
  slug: "5213"
},
{
  id: 162,
  name: "SS ROD HEAVY",
  price: 0,
  inStock: true,
  size: "12",
  image: "Heavy12.jpg",
  slug: "5214"
},
{
  id: 163,
  name: "SS ROD MEDIUM",
  price: 0,
  inStock: true,
  size: "15",
  image: "Medium15.jpg",
  slug: "5215"
},
{
  id: 164,
  name: "SS ROD HEAVY",
  price: 0,
  inStock: true,
  size: "15",
  image: "Heavy15.jpg",
  slug: "5216"
},
{
  id: 165,
  name: "SS ROD MEDIUM",
  price: 0,
  inStock: true,
  size: "18",
  image: "Medium18.jpg",
  slug: "5217"
},
{
  id: 166,
  name: "SS ROD HEAVY",
  price: 0,
  inStock: true,
  size: "18",
  image: "Heavy18.jpg",
  slug: "5218"
},
{
  id: 167,
  name: "CP FLANCH ROUND",
  size: "Medium",
  slug: "5311"
},
{
  id: 168,
  name: "CP FLANCH ROUND",
  size: "Small",
  slug: "5312"
},
{
  id: 169,
  name: "CP FLANCH ROUND",
  size: "Heavy",
  slug: "5313"
},
{
  id: 170,
  name: "PVC GUN 1.5MTR",
  size: "1",
  slug: "5411"
},
{
  id: 171,
  name: "MAHINDRA 1.5MTR",
  size: "1",
  slug: "5421"
},
{
  id: 172,
  name: "DOLPHIN 1.5MTR",
  size: "1",
  slug: "5422"
},
{
  id: 173,
  name: "PTMT GUN 1MTR",
  size: "1",
  slug: "5431"
},
{
  id: 174,
  name: "PTMT (HY) GUN 1MTR",
  size: "1",
  slug: "5432"
},
{
  id: 175,
  name: "TEFLON TAPE SMALL 8MTR.",
  size: "1/2",
  slug: "5511"
},
{
  id: 176,
  name: "TEFLON TAPE LARGE 12MTR.",
  size: "1/2",
  slug: "5512"
},
{
  id: 177,
  name: "TEFLON TAPE LARGE 12MTR.",
  size: "3/4",
  slug: "5513"
},
{
  id: 178,
  name: "TEFLON TAPE LARGE 12MTR.",
  size: "1",
  slug: "5514"
},
{
  id: 179,
  name: "SS JALI NORMAL",
  size: 36,
  slug: "5611"
},
{
  id: 180,
  name: "SS JALI NORMAL",
  size: 36,
  slug: "5612"
},
{
  id: 181,
  name: "SS JALI NORMAL",
  size: 36,
  slug: "5613"
},
{
  id: 182,
  name: "SS JALI LOCKING JALI",
  size: 36,
  slug: "5614"
},
{
  id: 183,
  name: "SS JALI HOLE JALI",
  size: 36,
  slug: "5615"
},
{
  id: 184,
  name: "SS JALI LOCKING HOLE",
  size: 36,
  slug: "5616"
},
{
  id: 185,
  name: "SS JALI KABJA JALI",
  size: 36,
  slug: "5617"
},
{
  id: 186,
  name: "SS JALI COCKROACH JALI",
  size: 36,
  slug: "5618"
},
{
  id: 187,
  name: "ANGLE COCK CHINA",
  size: "1",
  slug: "5711"
},
{
  id: 188,
  name: "SS ANGLE COCK",
  size: "1",
  slug: "5721"
},
{
    id: 189,
    name: "SPENDLE DISC MEDIUM",
    size: "MEDIUM",
    slug: "5811"
  },
  {
    id: 190,
    name: "SPENDLE DISC HEAVY",
    size: "HEAVY",
    slug: "5812"
  },
  {
    id: 191,
    name: "SPENDLE DISC NO 1",
    size: "NO 1",
    slug: "5813"
  },
  {
    id: 192,
    name: "SPENDLE DISC NO 2",
    size: "NO 2",
    slug: "5814"
  },
  {
    id: 193,
    name: "SPENDLE DISC NO 3",
    size: "NO 3",
    slug: "5815"
  },
  {
    id: 194,
    name: "SPENDLE DISC CONCEALED VALVE",
    size: "CONCEALED VALVE",
    slug: "5816"
  },
 
  {
    id: 195,
    name: "C.P.V.C. SOLVENT 10ML TUBE",
    size: "10ML TUBE",
    slug: "0011"
  },
  {
    id: 196,
    name: "C.P.V.C. SOLVENT 25ML TUBE",
    size: "25ML TUBE",
    slug: "0012"
  },
  {
    id: 197,
    name: "C.P.V.C. SOLVENT 59ML TIN",
    size: "59ML TIN",
    slug: "0013"
  },
  {
    id: 198,
    name: "C.P.V.C. SOLVENT 118ML TIN",
    size: "118ML TIN",
    slug: "0014"
  },
  {
    id: 199,
    name: "C.P.V.C. SOLVENT 237ML TIN",
    size: "237ML TIN",
    slug: "0015"
  },
  {
  id: 200,
  name: "U.P.V.C. SOLVENT 10ML TUBE",
  size: "10ML TUBE",
  slug: "0021"
},
{
  id: 201,
  name: "U.P.V.C. SOLVENT 25ML TUBE",
  size: "25ML TUBE",
  slug: "0022"
},
{
  id: 202,
  name: "U.P.V.C. SOLVENT 59ML TIN",
  size: "59ML TIN",
  slug: "0023"
},
{
  id: 203,
  name: "U.P.V.C. SOLVENT 118ML TIN",
  size: "118ML TIN",
  slug: "0024"
},
{
  id: 204,
  name: "U.P.V.C. SOLVENT 237ML TIN",
  size: "237ML TIN",
  slug: "0025"
},
{
  id: 205,
  name: "P.V.C. SOLVENT 10ML TUBE",
  size: "10ML TUBE",
  slug: "0031"
},
{
  id: 206,
  name: "P.V.C. SOLVENT 25ML TUBE",
  size: "25ML TUBE",
  slug: "0032"
},
{
  id: 207,
  name: "P.V.C. SOLVENT 59ML TIN",
  size: "59ML TIN",
  slug: "0033"
},
{
  id: 208,
  name: "P.V.C. SOLVENT 118ML TIN",
  size: "118ML TIN",
  slug: "0034"
},
{
  id: 209,
  name: "P.V.C. SOLVENT 237ML TIN",
  size: "237ML TIN",
  slug: "0035"
},
{
  id: 210,
  name: "P.V.C. SOLVENT 500ML TIN",
  size: "500ML TIN",
  slug: "0036"
},
{
  id: 211,
  name: "FLUSH TANK SIDE HANDLE",
  size: "36",
  slug: "701"
},
{
  id: 212,
  name: "FLUSH TANK SINGLE TOP PUSH BUTTON",
  size: "42",
  slug: "711"
},
{
  id: 213,
  name: "FLUSH TANK DOUBLE TOP PUSH BUTTON",
  size: "48",
  slug: "721"
},
{
  id: 214,
  name: "FLUSH TANK ULTRA SLIM BODY",
  size: "36",
  slug: "731"
},
{
  id: 215,
  name: "FLUSH TANK SINGLE FRONT PUSH",
  size: "42",
  slug: "741"
},
{
  id: 216,
  name: "FLUSH TANK DIGITAL PRINT DUAL",
  size: "48",
  slug: "751"
},
{
  id: 217,
  name: "SEAT COVER EWC SEAT COVER",
  size: "36",
  slug: "801"
},
{
  id: 218,
  name: "SEAT COVER ANGLO INDIAN",
  size: "42",
  slug: "811"
},
{
  id: 219,
  name: "SEAT COVER EWC SEAT COVER WITH JET",
  size: "48",
  slug: "821"
},
{
  id: 220,
  name: "SEAT COVER SOFT CLOSE (ROUND)",
  size: "36",
  slug: "831"
},
{
  id: 221,
  name: "SEAT COVER SOFT CLOSE (SQUARE)",
  size: "42",
  slug: "841"
},
{
  id: 222,
  name: "PTMT CONNECTION 18\"",
  size: "18",
  slug: "901"
},
{
  id: 223,
  name: "PTMT CONNECTION 24\"",
  size: "24",
  slug: "902"
},
{
  id: 224,
  name: "PTMT CONNECTION 30\"",
  size: "30",
  slug: "903"
},
{
  id: 225,
  name: "PTMT CONNECTION 36\"",
  size: "36",
  slug: "904"
},
{
  id: 226,
  name: "SS CONNECTION 18\"",
  size: "18",
  slug: "911"
},
{
  id: 227,
  name: "SS CONNECTION 24\"",
  size: "24",
  slug: "912"
},
{
  id: 228,
  name: "SS CONNECTION 30\"",
  size: "30",
  slug: "913"
},
{
  id: 229,
  name: "SS CONNECTION 36\"",
  size: "36",
  slug: "914"
},
{
  id: 230,
  name: "HOSE CLIP 3/8",
  size: "3/8",
  slug: "181"
},
{
  id: 231,
  name: "HOSE CLIP 1/2",
  size: "1/2",
  slug: "182"
},
{
  id: 232,
  name: "HOSE CLIP 3/4",
  size: "3/4",
  slug: "183"
},
{
  id: 233,
  name: "HOSE CLIP 1",
  size: "1",
  slug: "184"
},
{
  id: 234,
  name: "HOSE CLIP 1-1/4",
  size: "1-1/4",
  slug: "185"
},
{
  id: 235,
  name: "HOSE CLIP 1-1/2",
  size: "1-1/2",
  slug: "186"
},
{
  id: 236,
  name: "HOSE CLIP 2",
  size: "2",
  slug: "187"
},
{
  id: 237,
  name: "CHINA CLIP 3/4",
  size: "3/4",
  slug: "1811"
},
{
  id: 238,
  name: "CHINA CLIP 1/2",
  size: "1/2",
  slug: "1812"
},
{
  id: 239,
  name: "CHINA CLIP 3/4",
  size: "3/4",
  slug: "1813"
},
{
  id: 240,
  name: "CHINA CLIP 1",
  size: "1",
  slug: "1814"
},
{
  id: 241,
  name: "CHINA CLIP 5/8",
  size: "5/8",
  slug: "1815"
},
{
  id: 242,
  name: "CHINA CLIP 1-1/4",
  size: "1-1/4",
  slug: "1816"
},
{
  id: 243,
  name: "CHINA CLIP 1-1/2",
  size: "1-1/2",
  slug: "1817"
},
{
  id: 244,
  name: "CHINA CLIP 1-3/4",
  size: "1-3/4",
  slug: "1818"
},
{
  id: 245,
  name: "CHINA CLIP WITH KEY 3/4",
  size: "3/4",
  slug: "1819"
},
{
  id: 246,
  name: "CHINA CLIP WITH KEY 1",
  size: "1",
  slug: "1820"
},
{
  id: 247,
  name: "CHINA CLIP WITH KEY 1-1/4",
  size: "1-1/4",
  slug: "1821"
},
{
  id: 248,
  name: "U CLIP(PIPE CLIP-PATTI) 1/2",
  size: "1/2",
  slug: "1822"
},
{
  id: 249,
  name: "U CLIP(PIPE CLIP-PATTI) 3/4",
  size: "3/4",
  slug: "1823"
},
{
  id: 250,
  name: "U CLIP(PIPE CLIP-PATTI) 1",
  size: "1",
  slug: "1824"
},
{
  id: 251,
  name: "U CLIP(PIPE CLIP-PATTI) 1-1/4",
  size: "1-1/4",
  slug: "1825"
},
{
  id: 252,
  name: "U CLIP(PIPE CLIP-PATTI) 1-1/2",
  size: "1-1/2",
  slug: "1826"
},
{
  id: 253,
  name: "U CLIP(PIPE CLIP-PATTI) 2",
  size: "2",
  slug: "1827"
},
{
  id: 254,
  name: "U CLIP(PIPE CLIP-PATTI) 2.1/2",
  size: "2.1/2",
  slug: "1828"
},
{
  id: 255,
  name: "U CLIP(PIPE CLIP-PATTI) 3",
  size: "3",
  slug: "1829"
},
{
  id: 256,
  name: "U CLIP(PIPE CLIP-PATTI) 4",
  size: "4",
  slug: "1830"
},
{
  id: 257,
  name: "UPVC NAIL CLAMP 1/2",
  size: "1/2",
  slug: "1831"
},
{
  id: 258,
  name: "UPVC NAIL CLAMP 3/4",
  size: "3/4",
  slug: "1832"
},
{
  id: 259,
  name: "UPVC NAIL CLAMP 1",
  size: "1",
  slug: "1833"
},
{
  id: 260,
  name: "UPVC NAIL CLAMP 1-1/4",
  size: "1-1/4",
  slug: "1834"
},
{
  id: 261,
  name: "UPVC NAIL CLAMP 1-1/2",
  size: "1-1/2",
  slug: "1835"
},
{
  id: 262,
  name: "UPVC NAIL CLAMP 2",
  size: "2",
  slug: "1836"
},
{
  id: 263,
  name: "CPVC NAIL CLAMP 3/4",
  size: "3/4",
  slug: "1841"
},
{
  id: 264,
  name: "CPVC NAIL CLAMP 1",
  size: "1",
  slug: "1842"
},
{
  id: 265,
  name: "CPVC NAIL CLAMP 1-1/4",
  size: "1-1/4",
  slug: "1843"
},
{
  id: 266,
  name: "CPVC NAIL CLAMP 1-1/2",
  size: "1-1/2",
  slug: "1844"
},
{
  id: 267,
  name: "CPVC NAIL CLAMP 2",
  size: "2",
  slug: "1845"
},
{
  id: 268,
  name: "BALL VALVE 1/2",
  size: "1/2",
  slug: "17011"
},
{
  id: 269,
  name: "BALL VALVE 3/4",
  size: "3/4",
  slug: "17012"
},
{
  id: 270,
  name: "BALL VALVE 1",
  size: "1",
  slug: "17013"
},
{
  id: 271,
  name: "BALL VALVE 1-1/4",
  size: "1-1/4",
  slug: "17014"
},
{
  id: 272,
  name: "BALL VALVE 1-1/2",
  size: "1-1/2",
  slug: "17015"
},
{
  id: 273,
  name: "BALL VALVE 2",
  size: "2",
  slug: "17016"
},
{
  id: 274,
  name: "THREAD BALL VALVE 1/2",
  size: "1/2",
  slug: "17021"
},
{
  id: 275,
  name: "THREAD BALL VALVE 1",
  size: "1",
  slug: "17022"
},
{
  id: 276,
  name: "THREE WAY BALL VALVE 1",
  size: "1",
  slug: "17031"
},
{
  id: 277,
  name: "CPVC PIPE 3/4",
  size: "3/4",
  slug: "14011"
},
{
  id: 278,
  name: "CPVC PIPE 1",
  size: "1",
  slug: "14012"
},
{
  id: 279,
  name: "UPVC PIPE 1/2",
  size: "1/2",
  slug: "13011"
},
{
  id: 280,
  name: "UPVC PIPE 3/4",
  size: "3/4",
  slug: "13012"
},
{
  id: 281,
  name: "UPVC PIPE 1",
  size: "1",
  slug: "13013"
},
{
  id: 282,
  name: "RADO MODEL SHORT BODY",
  size: "",
  slug: "601"
},
{
  id: 283,
  name: "RADO MODEL LONG BODY",
  size: "",
  slug: "602"
},
{
  id: 284,
  name: "RADO MODEL ANGLE COCK",
  size: "",
  slug: "603"
},
{
  id: 285,
  name: "RADO MODEL SHORT SINK COCK",
  size: "",
  slug: "604"
},
{
  id: 286,
  name: "RADO MODEL SHORT SWAN COCK",
  size: "",
  slug: "605"
},
{
  id: 287,
  name: "RADO MODEL TWO WAY BIB COCK",
  size: "",
  slug: "606"
},
{
  id: 288,
  name: "RADO MODEL TWO WAY ANGLE",
  size: "",
  slug: "607"
},
{
  id: 289,
  name: "RADO MODEL LONG SINK COCK",
  size: "",
  slug: "608"
},
{
  id: 290,
  name: "RADO MODEL LONG SWAN COCK",
  size: "",
  slug: "609"
},
{
  id: 291,
  name: "RADO MODEL PILLAR COCK",
  size: "",
  slug: "6010"
},
{
  id: 292,
  name: "RADO MODEL NOZZLE COCK",
  size: "",
  slug: "6011"
},
{
  id: 293,
  name: "RADO MODEL WASHING MACHINE",
  size: "",
  slug: "6012"
},
{
  id: 294,
  name: "FRANKY MODEL SHORT BODY",
  size: "",
  slug: "611"
},
{
  id: 295,
  name: "FRANKY MODEL LONG BODY",
  size: "",
  slug: "612"
},
{
  id: 296,
  name: "FRANKY MODEL ANGLE COCK",
  size: "",
  slug: "613"
},
{
  id: 297,
  name: "FRANKY MODEL SHORT SINK COCK",
  size: "",
  slug: "614"
},
{
  id: 298,
  name: "FRANKY MODEL SHORT SWAN COCK",
  size: "",
  slug: "615"
},
{
  id: 299,
  name: "FRANKY MODEL TWO WAY BIB COCK",
  size: "",
  slug: "616"
},
{
  id: 300,
  name: "FRANKY MODEL TWO WAY ANGLE",
  size: "",
  slug: "617"
},
{
  id: 301,
  name: "FRANKY MODEL MIXER WITH BEND",
  size: "",
  slug: "618"
},
{
  id: 302,
  name: "FRANKY MODEL PILLAR COCK",
  size: "",
  slug: "619"
},
{
  id: 303,
  name: "FRANKY MODEL NOZZLE COCK",
  size: "",
  slug: "620"
}

];

  const handleSearchClick = () => {
  const searchQuery = query?.toLowerCase()?.trim() || "";
  const found = products?.find((p) => {
    const name = p?.name?.toLowerCase() || "";
    const size = p?.size?.toLowerCase() || "";
    return name.includes(searchQuery) || size.includes(searchQuery);
  });

  if (found && found.slug) {
    navigate(`/product${found.slug}`, { state: found });
  } else {
    alert("Product not found");
  }
};


  const filteredSuggestions = products?.filter((p) => {
  const name = p?.name?.toString().toLowerCase() || "";
  const size = p?.size?.toString().toLowerCase() || "";
  const queryText = query?.toLowerCase() || "";
  return name.includes(queryText) || size.includes(queryText);
}) || [];



  const renderSearchInput = (widthClass = "w-[480px]") => (
    <div className="relative">
      <div className={`flex items-center border-4 border-[#3F72AF] rounded-lg ${widthClass}`}>
        <input
          type="text"
          placeholder="What are you Looking for ?"
          className="h-10 pl-4 outline-none bg-[#fdfce9] w-full"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
          }}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}

          onFocus={() => setShowSuggestions(true)}
        />
        <button onClick={handleSearchClick}>
          <img
            src="/search_icon.svg"
            alt="Search"
            className="h-10 w-12 bg-[#3F72AF] p-2 rounded-r-lg"
          />
        </button>
      </div>

      {showSuggestions && query && (
  <ul className="absolute top-12 w-full max-h-60 overflow-y-auto bg-[#fdfce9]/10 backdrop-blur-md border border-gray-300 rounded shadow z-50">
    
    {filteredSuggestions.length === 0 && (
      <li className="px-4 py-2 text-gray-500">No matching products</li>
    )}

    {Array.isArray(filteredSuggestions) &&
  filteredSuggestions.map((item) => (
    item?.name && item?.size && item?.slug && (
      <li
        key={item.id}
        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => {
          setQuery(item.name);
          navigate(`/product${item.slug}`, { state: item });
          setShowSuggestions(false);
        }}
      >
        {item.name} ({item.size})
      </li>
    )
))}


  </ul>
)}

    </div>
  );

  return (
    <header className="bg-[#f9f9e6] w-full pb-4">
      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between px-10 py-4">
          <img src="/kT-final-logo.png" alt="Logo" className="h-28 w-28" />
          {renderSearchInput()}
          <a
            href="https://www.google.com/maps/dir//827,+New+Loha+Mandi..."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center gap-2 bg-[#3F72AF] text-white px-4 py-3 rounded">
              <img src="/showroom.png" className="h-5 w-5" alt="Showroom" />
              Showroom Details
            </button>
          </a>
        </div>

        <div className="flex mt-6 px-10 justify-between">
          <div className="flex gap-8 w-2/5">
            <Link to="/home">
              <button className="bg-[#3F72AF] text-white px-2 py-1 rounded">Home</button>
            </Link>
            <Link to="/about">
              <button className="hover:bg-blue-500 hover:text-black px-3 text-black py-1 border border-gray-400 rounded">
                Brand
              </button>
            </Link>
            <a
              href="https://wa.me/918962075300?text=Hello..."
              target="_blank"
              rel="noopener noreferrer"
              className="[text-decoration:none]"
            >
              <button className="flex text-black items-center px-4 py-1 border border-gray-400 rounded">
                <img src="/whats.png" className="h-4 w-4 mr-1" alt="WhatsApp" />
                Contact
              </button>
            </a>
            <Link to="/about">
              <button className="hover:bg-blue-500 hover:text-black px-3 text-black py-1 border border-gray-400 rounded">
                About
              </button>
            </Link>
          </div>

          <div className="flex gap-8 w-3/5 justify-end">
            <button className="flex items-center bg-[#3F72AF] text-white font-medium px-4 py-1 rounded">
              <img src="/in_store_products.svg" className="h-5 w-5 mr-2" alt="Products" />
              In-Store Products
            </button>
            <button className="flex items-center bg-[#3F72AF] text-white font-medium px-4 py-1 rounded">
              <img src="/in_store_offers.svg" className="h-5 w-5 mr-2" alt="Offers" />
              In-Store Offers
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="block md:hidden px-4 py-4">
        <div className="flex flex-col items-center gap-4">
          
          <img src="/kT-final-logo.png" alt="Logo" className="h-20 w-20 " />
          {renderSearchInput("w-full max-w-[350px]")}

          <a
            href="https://www.google.com/maps/place/Devi+Ahilya..."
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <div className="flex items-center gap-2 bg-[#3F72AF] text-white px-3 py-2 rounded text-sm">
              <img src="/showroom.png" className="h-4 w-4" alt="Showroom" />
              Showroom
            </div>
          </a>

          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <Link to="/home" className="bg-[#3F72AF] text-white px-3 py-1  rounded">
              Home
            </Link>
            
            <a
              href="https://wa.me/918962075300?text=Hello..."
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-400 px-3 py-1 rounded flex items-center text-black"
            >
              <img src="/whats.png" className="h-4 w-4 mr-1" alt="WhatsApp" />
              Contact
            </a>
            <Link to="/about" className="border border-gray-400  px-3 py-1 rounded text-black">
              About
            </Link>
          </div>

          <div className="flex gap-3 mt-4">
            <button className="flex items-center bg-[#3F72AF] text-white px-3 py-1 text-xs rounded">
              <img src="/in_store_products.svg" className="h-4 w-4 mr-1" alt="Products" />
              Products
            </button>
            <button className="flex items-center bg-[#3F72AF] text-white px-3 py-1 text-xs rounded">
              <img src="/in_store_offers.svg" className="h-4 w-4 mr-1" alt="Offers" />
              Offers
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
