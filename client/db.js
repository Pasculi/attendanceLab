const docente = [
  {
    id: 1,
    nombres: "LESLIE SILVANA",
    apellidos: "MARTINEZ PINO",
    email: "LESLIESILVANATOLEDOPINO@GMAIL.COM",
  },
  {
    id: 2,
    nombres: "CAROLINA ANDREA",
    apellidos: "ELLWANGER VELIZ",
    email: "CELLWANGERV@HOTMAIL.COM",
  },
  {
    id: 3,
    nombres: "ALEJANDRA BEATRIZ",
    apellidos: "GONZÁLEZ GALLARDO",
    email: "ABGGVALDIVIA@GMAIL.COM",
  },
  {
    id: 4,
    nombres: "PATRICIA EUGENIA",
    apellidos: "ESCAREZ PAZ",
    email: "PATYESCAREZ@GMAIL.COM",
  },
  {
    id: 5,
    nombres: "RENATA VALENTINA MONSERRAT",
    apellidos: "JARAMILLO MUÑOZ",
    email: "PROFESORA.RENATAJARAMILLO@GMAIL.COM",
  },
  {
    id: 6,
    nombres: "VICTORIA FRANCISCA",
    apellidos: "MENA VERA",
    email: "VMENAVERA@GMAIL.COM",
  },
  {
    id: 7,
    nombres: "JAVIERA FERNANDA",
    apellidos: "KOPP ZÀRATE",
    email: "KOPP.JAVIERA@GMAIL.COM",
  },
  {
    id: 8,
    nombres: "ROXANA ANDREA",
    apellidos: "OPORTO AICHELE",
    email: "ROXANAOPORTO@GMAIL.COM",
  },
  {
    id: 9,
    nombres: "LILIAN DEL CARMEN",
    apellidos: "MARTINEZ MORALES",
    email: "LILIAN.MARTINEZ.M@GMAIL.COM",
  },
  {
    id: 10,
    nombres: "CRISTOBAL FRANCISCO",
    apellidos: "SANTIBAÑEZ LEHNEBACH",
    email: "CRISTOBALSFRANCISCO@GMAIL.COM",
  },
  {
    id: 11,
    nombres: "CLAUDIA MABEL",
    apellidos: "LARA LEAL",
    email: "CLAUDIA.LARA.LEAL@GMAIL.COM",
  },
  {
    id: 12,
    nombres: "JUANA",
    apellidos: "RETAMAL JIMENEZ",
    email: "JURJ33@HOTMAIL.COM",
  },
  {
    id: 13,
    nombres: "CHRISTOPHER MAURICIO",
    apellidos: "WISTUBA GALAZ",
    email: "CHRIS.WISTUBA92@GMAIL.COM",
  },
  {
    id: 14,
    nombres: "CAROLA HERNA",
    apellidos: "PERALTA MUÑOZ",
    email: "CAROLA146@HOTMAIL.COM",
  }
];


docente.map((item, index) => {
  console.log(`${index + 1}: ${item.nombres } ${item.apellidos}`);
})