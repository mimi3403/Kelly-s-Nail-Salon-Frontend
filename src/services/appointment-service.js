const BASE_URL = 'http://localhost:3001/api/contactus';

function fetchAppointment(uid) {
  return fetch(`${BASE_URL}?uid=${uid}`).then((res) => res.json());
}

function createAppointment(data, uid) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'Application/json',
    },
    body: JSON.stringify({ ...data, uid }),
  }).then((res) => res.json());
}

function updateAppointment({ name, phoneNumber, date, time, _id }, uid) {
  return fetch(`${BASE_URL}/${_id}?uid=${uid}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'Application/json'
    },
    body: JSON.stringify({ name, phoneNumber, date, time })
  }).then(res => res.json());
}

function deleteAppointment(apptId, uid) {
  return fetch(`${BASE_URL}/${apptId}?uid=${uid}`, {
    method: 'DELETE'
  }).then(res => res.json());
}

export { fetchAppointment, createAppointment, updateAppointment, deleteAppointment };

