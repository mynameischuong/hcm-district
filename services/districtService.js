const District = require('../models/districtModel');
const districts = require('../area_hcm.ts');
const wards = require('../hcm_districts_wards')

require('dotenv').config();

const JWT_CHARS = process.env.JWT_CHARS;

const getDistrict = token => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, JWT_CHARS, err => {
      if (err) return reject(err);

      
    });
  });
}

module.exports = {
  async getAllDistrict(token) {
    const d = await getDistrict(token);
    return { d };
  }
}