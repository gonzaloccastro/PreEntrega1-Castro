import { addDoc, collection, documentId, getDocs, serverTimestamp, writeBatch, where, query } from "firebase/firestore";
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../../context/CartContext";
import { dataBase } from "../../services/firebaseConfig";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Formu =  () =>{
    const [name, setName] = useState ('');
    const [lastName, setLastName] = useState ('');
    const [telefono, setTelefono] = useState ('');
    const [orderId, setOrderId] = useState ('');
    const [email, setEmail] = useState ('');
    const [confirmacionEmail, setConfirmacionEmail] = useState ('');


    const [loading, setLoading] = useState (false);

    const {cart, sumaTotal, eliminarTodo} = useContext(CartContext);


    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();


        try {
            const orden = {
                nombre:{name, lastName},
                telefono: telefono,
                total: sumaTotal(),
                date: serverTimestamp(),
                items: cart,
                email: email,
            };

            const ids = cart.map((prod)=> prod.id)
            const productosReferencia = collection(dataBase, 'productos')
            const productsAddedFromFirestore = await getDocs(
                query (productosReferencia, where(documentId(),'in', ids)) 
            )
        
            const { docs } = productsAddedFromFirestore;

            const outOfStock = []

            const batch = writeBatch (dataBase)

            docs.forEach((doc)=>{
                const dataDoc = doc.data()
                const stockDB = dataDoc.stock

                const produAgregadoAlCarrito = cart.find((prod) => prod.id ===doc.id );
                const prodQuantity = produAgregadoAlCarrito?.cantidad

                if (stockDB >= prodQuantity) {
                    batch.update(doc.ref, {stock: stockDB-prodQuantity});
                } else { 
                    outOfStock.push({id:doc.id, ...dataDoc})
                }
            });

            if (outOfStock.length === 0) {
                batch.commit()

                const orderRef = collection (dataBase, 'ordenes')
                const orderAdded = await addDoc ( orderRef, orden)
                setOrderId(orderAdded.id);
                eliminarTodo();

            } else {

                return <h1 style={{margin:'12rem'}}>No hay más stock de ese producto.</h1>

            };

        } catch (error) {
            console.log(error)

        } finally {setLoading(false)}

    };

    const handleChangeName = (e) => {
        setName(e.target.value);

    };
    const handleChangeLastName = (e) => {
        setLastName(e.target.value);

    };
    const handleChangeTelefono = (e) => {
        setTelefono(e.target.value);

    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);

    };

    const handleChangeConfirmacionEmail = (e) => {
        setConfirmacionEmail(e.target.value);

    };


    if (orderId) {
        return <h1 style={{margin:'12rem'}}>Gracias por tu compra! <br></br> Tu numero de seguimiento es: <br></br><br></br>{orderId}</h1>
    };

    return (
        <Form style={{margin: "8rem"}} onSubmit={handleSubmit} action="">
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Nombre</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Nombre..." 
                    name="nombre" 
                    onChange={handleChangeName} 
                    value={name}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Apellido</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Apellido..." 
                    name="apellido" 
                    onChange={handleChangeLastName}
                    value={lastName}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control 
                    type="number" 
                    placeholder="Teléfono..." 
                    name="telefono"
                    onChange={handleChangeTelefono}
                    value={telefono}

                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Email..." 
                    name="email"
                    onChange={handleChangeEmail}
                    value={email}
                    />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Repetir Email</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Repetir Email..." 
                    name="confirmacionEmail"
                    onChange={handleChangeConfirmacionEmail}
                    value={confirmacionEmail}
                    
                    />
            </Form.Group>

            {
            loading 

            ? 
            
            <Button variant="primary" type="submit">
            Enviando...
            </Button>
            
            : 
            
            (   ((name && lastName && telefono && email && confirmacionEmail) !== '') 

                ?

                <Button variant="primary" type="submit">
                    Realizar Compra
                </Button>

                :
            
                <Button variant="primary" disabled>
                    Falta completar algún dato
                </Button>
            )
            }
      </Form>

    );
};

export default Formu;

