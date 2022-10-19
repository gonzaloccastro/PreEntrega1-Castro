import { useState } from "react";

const Form =  () =>{
    const [name, setName] = useState ('');
    const [lastName, setLastName] = useState ('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({name, lastName});

    };
    const handleChangeName = (e) => {
        setName(e.target.value);

    };
    const handleChangeLastName = (e) => {
        setLastName(e.target.value);

    };

 

    return (
        <div 
            style={{
                minHeight: '70vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <form onSubmit={handleSubmit} action="">
                <input 
                    type="text" 
                    name="nombre" 
                    onChange={handleChangeName}
                    value={name}
                />
                <input 
                    type="text" 
                    name="apellido" 
                    onChange={handleChangeLastName}
                    value={lastName}
                />
                <button>Enviar</button>
            </form>
        </div>
    );
};

export default Form;

