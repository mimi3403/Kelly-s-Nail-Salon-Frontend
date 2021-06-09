// import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/contactus';

function fetchAppointment() {
  return fetch(BASE_URL).then((res) => res.json());
}

function createAppointment(data) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'Application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

function updateAppointment({ name, phoneNumber, date, time, _id }) {
  return fetch(`${BASE_URL}/${_id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'Application/json'
    },
    body: JSON.stringify({ name, phoneNumber, date, time })
  }).then(res => res.json());
}

function deleteAppointment(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}

export { fetchAppointment, createAppointment, updateAppointment, deleteAppointment };

// const createAppointment = (data) => {
//   return fetch(`${BASE_URL}/contactus`, data);
//   console.log('called in service');
// };

// const apptService = {
// createAppointment,
//   fetchAppointment,
// };