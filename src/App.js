import { useState } from 'react';
import './App.css';

function App() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
  });
  const [tabledata, setTabledata] = useState([])

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Corrected preventDefault method name
    setTabledata(
      [...tabledata, inputs]
      );
      setInputs({
        name: '',
      email: '',
    });
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-bold my-5">
        Crud App
      </h1>
      <div className="bg-gray-200 p-10 max-w-fit m-auto ">
        <form onSubmit={handleSubmit}>
          <div className="mt-2 flex flex-col justify-start text-left gap-1">
            <label className="pr-2">Name</label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={inputs.name}
              onChange={handleChange} // Corrected function name
              className="p-1"
            />
          </div>
          <div className="mt-2 flex flex-col justify-start text-left gap-1">
            <label className="pr-2">Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={inputs.email}
              onChange={handleChange} // Corrected function name
              className="p-1"
            />
          </div>
          <div>
            <button type="submit" className="bg-green-500 w-full px-10 m-auto mt-4 py-1">Add</button>
          </div>
        </form>       

          <div class="relative overflow-x-auto mt-5">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                          <th scope="col" class="px-6 py-3">
                              Name
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Email
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Actions
                          </th>
                      </tr>
                  </thead>
                  <tbody>         
                    {tabledata.map((items) => (
                      <tr class="bg-white dark:bg-gray-800">                
                        <td class="px-6 py-4">
                          {items.name}
                        </td>              
                        <td class="px-6 py-4">
                          {items.email}
                        </td>              
                        <td class="px-6 py-4">
                          <div className="flex gap-2">
                          <button className='text-green-600'>Edit</button>
                          <button className='text-red-700'>Delete</button>
                          </div>
                        </td>              
                      </tr>
                    ))}
                  </tbody>
              </table>
          </div>
      </div>
    </div>
  );
}

export default App;
