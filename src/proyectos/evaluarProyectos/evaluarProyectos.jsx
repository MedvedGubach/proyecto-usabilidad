import { Fragment, React, useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import Paper from '@mui/material/Paper';


const EvaluarProyectos = () => {



    const [valueProyectos, setValueProyectos] = useState(null);
    const [inputValueProyectos, setInputValueProyectos] = useState('');
    const [proyectosArray, setProyectosarray] = useState([]);

    const id = sessionStorage.getItem('id');
    console.log('id usuario', id);
    const [nombreProyecto, setNombreProyecto] = useState('');
    const [interfaz, setInterfaz] = useState('');
    const [usabilidad, setUsabilidad] = useState('');
    const [intuitivo, setIntuitivo] = useState('');
    const [accesibilidad, setAccesibilidad] = useState('');

    const getProyectos = () => {

        let fData = new FormData();

        fData.append('id', id);

        axios.post('http://localhost/backend-usabilidad-main/userServices/proyectos/listarProyectosUsuario.php', fData).then(function (response) {
            console.log(response.data);
            const array = [];
            for (let x = 0; x < response.data.length; x++) {
                console.log(response.data[x].Id)
                array.push({ label: response.data[x].nombre_proyecto, value: response.data[x].Id });
            }
            setProyectosarray(array);
        });
    }

    const proyectosChange = (v) => {
        setNombreProyecto(v.label);
    }

    const evaluarProyecto = () => {
        console.log('hola button evaluar')
        if (interfaz == '' || usabilidad == '' || intuitivo == '' || accesibilidad == '' || inputValueProyectos == '') {
            toast.warning('Todos los campos son obligatorios', { theme: "dark", position: "top-center", toastId: 'warning1' });
        } else {
            if (interfaz < 0 || usabilidad < 0 || intuitivo < 0 || accesibilidad < 0) {
                toast.warning('La evaluación no puede contener números negativos', { theme: "dark", position: "top-center", toastId: 'warning2' });
            } else {
                if (interfaz > 100 || usabilidad > 100 || intuitivo > 100 || accesibilidad > 100) {
                    toast.warning('La calificación no puede ser mayor que 100', { theme: "dark", position: "top-center", toastId: 'warning2' });
                } else {
                    const url = 'http://localhost/backend-usabilidad-main/userServices/proyectos/evaluarProyecto.php';
                    let fData = new FormData();

                    fData.append('evaluador', id);
                    fData.append('nombre_proyecto', nombreProyecto);
                    fData.append('interfaz', interfaz);
                    fData.append('usabilidad', usabilidad);
                    fData.append('intuitivo', intuitivo);
                    fData.append('accesibilidad', accesibilidad);

                    axios.post(url, fData).then(response => alert(response.data)).catch(error => alert(error));
                }
            }
        }

    }

    useEffect(() => {
        getProyectos();
    }, [])


    return (
        <Fragment>
            <ToastContainer></ToastContainer>
            <div className="container">
                <Paper elevation={6}>
                    <div className="row | mb-2 | mt-2 | ml-4">
                        <div className="col-12 | col-md-4 | col-sm-12">
                            <label>Evaluar Proyectos</label>
                        </div>
                    </div>

                    <div className="row | mb-4 | ml-4">
                        <div className="col-12 | col-md-6 | col-sm-12">
                            <Autocomplete
                                freeSolo
                                value={valueProyectos}
                                onChange={(_, v) => proyectosChange(v)}
                                inputValue={inputValueProyectos}
                                onInputChange={(_, v) => setInputValueProyectos(v)}
                                options={proyectosArray}
                                renderInput={(params) => <TextField {...params} label="Dueño del Proyecto" />}
                            />
                        </div>
                    </div>

                    <div className="row | mb-4 | ml-4">
                        <div className="col-12 | col-md-6 | col-sm-12">
                            <TextField InputProps={{ inputProps: { min: 0, max: 100 } }} onChange={(v) => { setInterfaz(v.target.value); console.log(v.target.value) }} fullWidth id="outlined-number" label="Interfaz" type="number" InputLabelProps={{ shrink: true, }} />
                        </div>
                    </div>

                    <div className="row | mb-4 | ml-4">
                        <div className="col-12 | col-md-6 | col-sm-12">
                            <TextField InputProps={{ inputProps: { min: 0, max: 10 } }} onChange={(v) => { setUsabilidad(v.target.value); console.log(v.target.value) }} fullWidth id="outlined-number" label="Usabilidad" type="number" InputLabelProps={{ shrink: true, }} />
                        </div>
                    </div>

                    <div className="row | mb-4 | ml-4">
                        <div className="col-12 | col-md-6 | col-sm-12">
                            <TextField InputProps={{ inputProps: { min: 0, max: 10 } }} onChange={(v) => { setIntuitivo(v.target.value); console.log(v.target.value) }} fullWidth id="outlined-number" label="Intuitivo" type="number" InputLabelProps={{ shrink: true, }} />
                        </div>
                    </div>

                    <div className="row | mb-4 | ml-4">
                        <div className="col-12 | col-md-6 | col-sm-12">
                            <TextField InputProps={{ inputProps: { min: 0, max: 10 } }} onChange={(v) => { setAccesibilidad(v.target.value); console.log(v.target.value) }} fullWidth id="outlined-number" label="Accesibilidad" type="number" InputLabelProps={{ shrink: true, }} />
                        </div>
                    </div>

                    <div className="row | mb-4 | ml-4">
                        <div className="col-12 | col-md-6 | col-sm-12">
                            <Button onClick={evaluarProyecto} variant="contained" color="primary" >Evaluar Proyecto</Button>
                        </div>
                    </div>
                </Paper>
            </div>
        </Fragment>
    );
}

export default EvaluarProyectos;