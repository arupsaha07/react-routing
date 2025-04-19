import React, { useCallback, useState } from 'react';
import UseCallbackForm from './UseCallbackForm';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';

const UseCallbackHook = () => {

  const useCallbackFormCodeBody = `
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
            onSubmit(credentials); // Here data goes to parent when called 
            // onSubmit(credentials). 
            // The parent's handleSubmit receives the form data (credentials)
        };
    
        return (
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email" //This is important
                    value={credentials.email}
                    onChange={handleChange}
                />
    
                <input 
                    type="password" 
                    name="password" //This is important
                    value={credentials.password}
                    onChange={handleChange}
                />
    
                <button type="submit">{btnName}</button>
    
                <div>
                    Current state: {JSON.stringify(credentials)}
                </div>
            </form>
        );
    });
    
    export default UseCallbackForm;
    `

  const useCallbackHookCodeBody = `
import React, { useCallback, useState } from 'react';
import UseCallbackForm from './UseCallbackForm';

const UseCallbackHook = () => {
    const [submittedData, setSubmittedData] = useState(null);
    const [counter, setCounter] = useState(0);

    console.log("Parent component rendered");

    // Without useCallback, this would recreate the function on every render
    // causing the child component to re-render unnecessarily
    const handleSubmit = useCallback((data) => {
        console.log("Form submitted with:", data); // data is coming from child when 
        // The child calls onSubmit(credentials)
        setSubmittedData(data); // Parent updates the data to state and displays it in UI.
    }, []); // Empty dependency array means this never changes

    const incrementCounter = () => {
        setCounter(c => c + 1); //Clicking the counter button updates 
        // counter state → parent re-renders.
    };

    return (
        <div>            
            <div className="mb-6">
                // Parent component (UseCallbackHook) 
                // passes two props to child (UseCallbackForm)
                <UseCallbackForm 
                    btnName="Login" // prop 1 static value, doesn't change
                    onSubmit={handleSubmit} // prop 2 Memoized function via useCallback
                />
            </div>

            <div className="mt-6">
                <button onClick={incrementCounter}>
                    Increment Counter: {counter}
                </button>// Clicking this button will cause parent re-render 
                // but not form re-render
            </div>
        </div>
    );
};

export default UseCallbackHook;
    `

  const [submittedData, setSubmittedData] = useState(null);
  const [counter, setCounter] = useState(0);

  console.log("Parent component rendered");

  // Without useCallback, this would recreate the function on every render
  // causing the child component to re-render unnecessarily
  const handleSubmit = useCallback((data) => {
    console.log("Form submitted with:", data);
    setSubmittedData(data);
  }, []); // Empty dependency array means this never changes

  const incrementCounter = () => {
    setCounter(c => c + 1);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">useCallback Example</h1>
      <h4 className='font-semibold mt-4 mb-2 text-gray-700'>Data Flow in the Example</h4>
      <p>Parent <b>UseCallbackHook</b> to Child <b>UseCallbackForm</b></p>
      <p>The parent passes two props to the child:</p>
      <ol className='list-disc pl-6 space-y-1 mb-4 text-gray-600'>
        <li className='ms-6'><code className='bg-gray-300 px-1 rounded'>btnName="Login" which is static value, does not change.</code></li>
        <li className='ms-6'><code className='bg-gray-300 px-1 rounded'>onSubmit=handleSubmit (memoized function via useCallback)</code></li>
      </ol>
      <h5 className="text-base">Child to Parent <b>Form Submission</b></h5>
      <p>When the form is submitted:</p>
      <p>The child calls <code className='bg-gray-300 px-1 rounded'>onSubmit(credentials)</code></p>
      <p>The parent’s <b>handleSubmit</b> receives the form data <b>(credentials)</b>.</p>
      <p>The parent updates submittedData state, displaying it in the UI.</p>
      <h4 className='font-semibold mt-4 mb-2 text-gray-700'>Re-render Behavior</h4>
      <p> Clicking the counter button updates counter state → parent re-renders. Since handleSubmit is memoized and btnName is static, UseCallbackForm does not re-render (thanks to React.memo).</p>

      <div className="mb-6 flex gap-4">

        <div className='w-1/2'>
          <h2 className='font-bold'>Parent Component</h2>
          <pre>UseCallbackHook.jsx</pre>
          <SyntaxHighlighter language="javascript" style={nightOwl}>
            {useCallbackHookCodeBody}
          </SyntaxHighlighter>
        </div>

        <div className='w-1/2'>
          <h2 className="font-bold">Child Component</h2>
          <pre>UseCallbackForm.jsx</pre>
          <SyntaxHighlighter language="javascript" style={nightOwl}>
            {useCallbackFormCodeBody}
          </SyntaxHighlighter>
        </div>

      </div>

      <div className="mb-6">
        <UseCallbackForm
          btnName="Login"
          onSubmit={handleSubmit}
        />
      </div>

      {submittedData && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded">
          <h2 className="font-bold">Submitted Data:</h2>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}

      <div className="mt-6">
        <button
          onClick={incrementCounter}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          Increment Counter: {counter}
        </button>
        <p className="text-sm text-gray-600 mt-2">
          Clicking this will cause parent re-render but not form re-render
        </p>
      </div>
    </div>
  );
};

export default UseCallbackHook;