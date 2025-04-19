import React from 'react';

const UseCallbackForm = React.memo(({ btnName, onSubmit }) => {

    const [credentials, setCredentials] = React.useState({
        email: '',
        password: ''
    });

    console.log("UseCallbackForm rendered");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(credentials);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className='flex flex-col items-center mx-auto max-w-80'
        >
            <input
                type="email"
                name="email"
                placeholder='Email'
                className='border border-gray-500 mb-4 p-2 w-full'
                value={credentials.email}
                onChange={handleChange}
                required
            />

            <input
                type="password"
                name="password"
                placeholder='Password'
                className='border border-gray-500 mb-4 p-2 w-full'
                value={credentials.password}
                onChange={handleChange}
                minLength="6"
                required
            />

            <button
                type="submit"
                className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition'
            >
                {btnName}
            </button>

            <div className="mt-4 text-sm text-gray-600">
                Current state: {JSON.stringify(credentials)}
            </div>
        </form>
    );
});

export default UseCallbackForm;