import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SpecialChart = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    axios
      .get('https://openapi.programming-hero.com/api/phones?search=iphone')
      .then(data => {
        const loadedData = data.data.data;
        const phoneData = loadedData.map(phone => {
          const parts = phone.slug.split('-');
          const ph = {
            name: parts[0],
            value: parseInt(parts[1]),
          };
          return ph;
        });
        setPhones(phoneData);
        console.log(phoneData);
      });
  });
  return <div></div>;
};

export default SpecialChart;
