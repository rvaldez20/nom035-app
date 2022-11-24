
const Fase1 = () => {
  return (
    <div className="container">
      <div className="alert alert-primary text-center mt-4" role="alert">
        <h2>Fase I. Información del trabajador</h2>
      </div>

      <form>
        {/* Folio cuestionario aplicado/Trabajador */}
        <fieldset className="form-group">         
          <div className="row">
            <div className="col-md-3">              
              <div className="form-group">
                  <label htmlFor="folioCuestionario">Folio:</label>
                  <input type="text" className="form-control" name="folioCuestionario" id="folioCuestionario" placeholder="Ingrese un folio" required />
              </div>
            </div>
              <div className="col-md-9">
                <div className="form-group">
                  {/* Select con los trabjadores */}
                  <label htmlFor="nomtrabajador">Trabajadores:</label>
                  <select className="form-control" id="nomtrabajador" name="nomtrabajador">
                    <option>Selecciona un trabajador...</option>
                  </select>
                </div>

                {/* Input oculto para mandar la fecha por POST */}
                {/* <input type="hidden" name="fechaAplicacion" value="<?php echo 'fechaActual' ?>" /> */}

              </div>
          </div>
        </fieldset>

        {/* Titulo Datos Personales */}
        <div className="alert alert-danger text-left mt-4" role="alert">
          <h5>Datos Personales</h5>
        </div>

        {/* Opciones Sexo  */}
        <fieldset className="form-group mt-4">
          <div className="row">
              <legend className="col-form-label col-sm-3 pt-0 col-form-label-lg">Sexo:</legend>
              <div className="col-sm-8">
                <div className="form-check ">
                  <input className="form-check-input" type="radio" name="sexo" id="1" value="1" required />
                  <label className="form-check-label" htmlFor="1">
                    Masculino
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="sexo" id="2" value="2" required />
                  <label className="form-check-label" htmlFor="2">
                    Femenino
                  </label>
                </div>
              </div>
          </div>
        </fieldset>

        {/* Opciones edad */}
        <fieldset className="form-group mt-4">
          <div className="row">
            <legend className="col-form-label col-sm-3 pt-0 col-form-label-lg">Edad en años:</legend>
              <div className="col-sm-4">

                <div className="form-check">
                    <input className="form-check-input" type="radio" name="edad" id="3" value="3" required />
                    <label className="form-check-label" htmlFor="3">
                      15 - 19
                    </label>
                </div>

                <div className="form-check">
                    <input className="form-check-input" type="radio" name="edad" id="4" value="4" required />
                    <label className="form-check-label" htmlFor="4">
                      20 - 24
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="edad" id="5" value="5" required />
                    <label className="form-check-label" htmlFor="5">
                      25 - 29
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="edad" id="6" value="6" required />
                    <label className="form-check-label" htmlFor="6">
                      30 - 34
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="edad" id="7" value="7" required />
                    <label className="form-check-label" htmlFor="7">
                      35 - 39
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="edad" id="8" value="8" required />
                    <label className="form-check-label" htmlFor="8">
                      40 - 44
                    </label>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="edad" id="9" value="9" required />
                    <label className="form-check-label" htmlFor="9">
                      45 - 49
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="edad" id="10" value="10" required />
                    <label className="form-check-label" htmlFor="10">
                      50 - 54
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="edad" id="11" value="11" required />
                    <label className="form-check-label" htmlFor="11">
                      55 - 59
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="edad" id="12" value="12" required />
                    <label className="form-check-label" htmlFor="12">
                      60 - 64
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="edad" id="13" value="13" required />
                    <label className="form-check-label" htmlFor="13">
                      65 - 69
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="edad" id="14" value="14" required />
                    <label className="form-check-label" htmlFor="14">
                      70 o más
                    </label>
                </div>
              </div>
          </div>
        </fieldset>

        {/* Opciones Estado Civil */}
        <fieldset className="form-group mt-4">
          <div className="row">
              <legend className="col-form-label col-sm-3 pt-0 col-form-label-lg">Estado Civil:</legend>
              <div className="col-sm-4">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="edocivil" id="15" value="15" required />
                    <label className="form-check-label" htmlFor="15">
                      Casado(a)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="edocivil" id="16" value="16" required />
                    <label className="form-check-label" htmlFor="16">
                      Soltero(a)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="edocivil" id="17" value="17" required />
                    <label className="form-check-label" htmlFor="17">
                      Unión Libre
                    </label>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="edocivil" id="18" value="18" required />
                    <label className="form-check-label" htmlFor="18">
                      Divorciado(a)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="edocivil" id="19" value="19" required />
                    <label className="form-check-label" htmlFor="19">
                      Viudo(a)
                    </label>
                </div>
              </div>
          </div>
        </fieldset>

        {/* Nivel de estudios Primaria*/}
        <fieldset className="form-group mt-4">
          <div className="row">
              <legend className="col-form-label col-sm-3 pt-0 col-form-label-lg">Nivel de Estudio Primaria</legend>
              <div className="col-sm-8">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="primaria" id="20" value="20"/>
                    <label className="form-check-label" htmlFor="20">
                      Terminada
                    </label>
                </div>
                <div className="form-check">
                    {/* <!-- primaria incompleta --> */}
                    <input className="form-check-input" type="radio" name="primaria" id="21" value="21"/>
                    <label className="form-check-label" htmlFor="21">
                      Sin Cursar/Incompleta
                    </label>
                </div>     
              </div>
          </div>
        </fieldset>

        {/* Nivel de estudios Secundaria*/}
        <fieldset className="form-group mt-4">
          <div className="row">
              <legend className="col-form-label col-sm-3 pt-0 col-form-label-lg">Nivel de Estudio Secundaria</legend>
              <div className="col-sm-8">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="secundaria" id="22" value="22"/>
                    <label className="form-check-label" htmlFor="22">
                      Terminada
                    </label>
                </div>
                <div className="form-check">                     
                    <input className="form-check-input" type="radio" name="secundaria" id="23" value="23"/>
                    <label className="form-check-label" htmlFor="23">
                      Sin Cursar/Incompleta
                    </label>
                </div> 
              </div>
          </div>
        </fieldset>

        {/* Nivel de estudios Preparatoria*/}
        <fieldset className="form-group mt-4">
          <div className="row">
              <legend className="col-form-label col-sm-3 pt-0 col-form-label-lg">Nivel de Estudio Preparatoria</legend>
              <div className="col-sm-8">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="preparatoria" id="24" value="24"/>
                    <label className="form-check-label" htmlFor="24">
                      Terminada
                    </label>
                </div>
                <div className="form-check">                     
                    <input className="form-check-input" type="radio" name="preparatoria" id="25" value="25"/>
                    <label className="form-check-label" htmlFor="25">
                      Sin Cursar/Incompleta
                    </label>
                </div> 
              </div>
          </div>
        </fieldset>

        {/* Nivel de estudios Tecnico*/}
        <fieldset className="form-group mt-4">
          <div className="row">
              <legend className="col-form-label col-sm-3 pt-0 col-form-label-lg">Nivel de Estudio Técnico</legend>
              <div className="col-sm-8">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="tecnico" id="26" value="26"/>
                  <label className="form-check-label" htmlFor="26">
                    Terminada
                  </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="tecnico" id="27" value="27"/>
                    <label className="form-check-label" htmlFor="27">
                      Sin Cursar/Incompleta
                    </label>
                </div>
              </div>
          </div>
        </fieldset>

        {/* Nivel de estudios Licenciatura*/}
        <fieldset className="form-group mt-4">
          <div className="row">
              <legend className="col-form-label col-sm-3 pt-0 col-form-label-lg">Nivel de Estudio Licenciatura</legend>
              <div className="col-sm-8">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="licenciatura" id="28" value="28"/>
                    <label className="form-check-label" htmlFor="28">
                      Terminada
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="licenciatura" id="29" value="29"/>
                    <label className="form-check-label" htmlFor="29">
                      Sin Cursar/Incompleta
                    </label>
                </div>
              </div>
          </div>
        </fieldset>

        {/* Nivel de estudios Maestría*/}
        <fieldset className="form-group mt-4">
          <div className="row">
              <legend className="col-form-label col-sm-3 pt-0 col-form-label-lg">Nivel de Estudio Maestría</legend>
              <div className="col-sm-8">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="maestria" id="30" value="30"/>
                    <label className="form-check-label" htmlFor="30">
                      Terminada
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="maestria" id="31" value="31"/>
                    <label className="form-check-label" htmlFor="31">
                      Sin Cursar / Incompleta
                    </label>
                </div>
              </div>
          </div>
        </fieldset>

        {/* Nivel de estudios Doctorado*/}
        <fieldset className="form-group mt-4">
          <div className="row">
              <legend className="col-form-label col-sm-3 pt-0 col-form-label-lg">Nivel de Estudio Doctorado</legend>
              <div className="col-sm-8">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="doctorado" id="32" value="32"/>
                    <label className="form-check-label" htmlFor="32">
                      Terminada
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="doctorado" id="33" value="33"/>
                    <label className="form-check-label" htmlFor="33">
                      Sin Cursar/Incompleta
                    </label>
                </div>
              </div>
          </div>
        </fieldset>
        
        {/* <!-- Titulo Datos Laborales --> */}
        <div className="alert alert-danger text-left mt-4" role="alert">
          <h5>Datos Laborales</h5>
        </div>

        {/* <!-- Ocupación/Profesión/Puesto --> */}
        <div className="form-group row mt-4">
          <label htmlFor="puesto" className="col-sm-3 col-form-label-lg">Profesión/Puesto</label>
          <div className="col-sm-9">
              <input type="text" className="form-control" id="puesto" name="puesto" placeholder="Ingrese su Ocupación o Profesión o Puesto" required />
          </div>
        </div>

        {/* <!-- Departamento/Sección/Area --> */}
        <div className="form-group row mt-4">
          <label htmlFor="area" className="col-sm-3 col-form-label-lg">Departamento/Area</label>
          <div className="col-sm-9">
              <input type="text" className="form-control" id="area" name="area" placeholder="Ingrese su Departamento o Sección o Área" required />
          </div>
        </div>

        {/* <!-- Tipo Puesto --> */}  
        <fieldset className="form-group mt-4">
          <div className="row">
            <legend className="col-form-label col-sm-3 pt-0 col-form-label-lg">Tipo de Puesto:</legend>
            <div className="col-sm-9">
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="tipopuesto" id="34" value="34"/>
                  <label className="form-check-label" htmlFor="34">
                  Operativo
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="tipopuesto" id="35" value="35"/>
                  <label className="form-check-label" htmlFor="35">
                  Profesional o Técnico
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="tipopuesto" id="36" value="36"/>
                  <label className="form-check-label" htmlFor="36">
                  Supervisor
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="tipopuesto" id="37" value="37"/>
                  <label className="form-check-label" htmlFor="37">
                  Gerente
                  </label>
              </div>                                                  
            </div>           
          </div>
        </fieldset>

        {/* <!-- Tipo Contratación --> */}  
        <fieldset className="form-group mt-4">
          <div className="row">
            <legend className="col-form-label col-sm-3 pt-0 col-form-label-lg">Tipo de contratación:</legend>
            <div className="col-sm-9">
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="tipocontratacion" id="38" value="38"/>
                  <label className="form-check-label" htmlFor="38">
                  Por obra o proyecto
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="tipocontratacion" id="39" value="39"/>
                  <label className="form-check-label" htmlFor="39">
                  Por tiempo determinado (Temporal)
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="tipocontratacion" id="40" value="40"/>
                  <label className="form-check-label" htmlFor="40">
                  Tiempo indeterminado
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="tipocontratacion" id="41" value="41"/>
                  <label className="form-check-label" htmlFor="41">
                  Honorarios
                  </label>
              </div>                                                  
            </div>           
          </div>
        </fieldset>

        {/* <!-- Opciones Tipo Personal --> */}  
        <fieldset className="form-group mt-4">
          <div className="row">
            <legend className="col-form-label col-sm-3 pt-0 col-form-label-lg">Tipo de Personal:</legend>
            <div className="col-sm-9">
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="tipopersonal" id="42" value="42"/>
                  <label className="form-check-label" htmlFor="42">
                  Sindicalizado
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="tipopersonal" id="43" value="43"/>
                  <label className="form-check-label" htmlFor="43">
                  Ninguno
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="tipopersonal" id="44" value="44"/>
                  <label className="form-check-label" htmlFor="44">
                  Confianza
                  </label>
              </div>                                                           
            </div>           
          </div>
        </fieldset>

        {/* <!-- Opciones Tipo Jornada de Trabajo  --> */}  
        <fieldset className="form-group mt-4">
          <div className="row">
            <legend className="col-form-label col-sm-3 pt-0 col-form-label-lg">Tipo de Jornada de trabajo:</legend>
            <div className="col-sm-9">
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="tipojornadatrabajo" id="45" value="45"/>
                  <label className="form-check-label" htmlFor="45">
                  Fijo nocturno(entre las 20:00 y 06:00 hrs)
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="tipojornadatrabajo" id="46" value="46"/>
                  <label className="form-check-label" htmlFor="46">
                  Fijo diurno(entre las 06:00 y 20:00 hrs)
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="tipojornadatrabajo" id="47" value="47"/>
                  <label className="form-check-label" htmlFor="47">
                  Fijo mixto(combinación de nocturno y diurno)
                  </label>
              </div>                                                           
            </div>           
          </div>
        </fieldset>

        {/* <!-- Opciones Rotación de turno  --> */}  
        <fieldset className="form-group mt-4">
          <div className="row">
            <legend className="col-form-label col-sm-3 pt-0 col-form-label-lg">Realiza rotaciṕon de turnos:</legend>
            <div className="col-sm-9">
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="rotacionturnos" id="48" value="48"/>
                  <label className="form-check-label" htmlFor="48">
                  Si
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="rotacionturnos" id="49" value="49"/>
                  <label className="form-check-label" htmlFor="49">
                  No
                  </label>
              </div>                                                                  
            </div>           
          </div>
        </fieldset>

        {/* <!-- Experiencia en años --> */}
        <div className="form-group row mt-4">
          <label htmlFor="area" className="col-sm-3 col-form-label-lg">Experiencia(años):</label>
          <div className="col-sm-9">
              <input type="text" className="form-control" id="experienciayears" name="experienciayears" placeholder="Ingrese su experiencia en años" required />
          </div>
        </div>

        {/* <!-- Opciones Tempo en el puesto actual  --> */}  
        <fieldset className="form-group mt-4">
          <div className="row">
            <legend className="col-form-label col-sm-3 pt-0 col-form-label-lg">Tiempo en el Puesto Actual:</legend>
            <div className="col-sm-9">
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="tiempopuestoactual" id="50" value="50"/>
                  <label className="form-check-label" htmlFor="50">
                  Menos de 6 meses
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="tiempopuestoactual" id="51" value="51"/>
                  <label className="form-check-label" htmlFor="51">
                  Entre 6 meses y 1 año
                  </label>
              </div>     
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="tiempopuestoactual" id="52" value="52"/>
                  <label className="form-check-label" htmlFor="52">
                  Entre 1 a 4 años
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="tiempopuestoactual" id="53" value="53"/>
                  <label className="form-check-label" htmlFor="53">
                  Entre 5 a 9 años
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="tiempopuestoactual" id="54" value="54"/>
                  <label className="form-check-label" htmlFor="54">
                  Entre 10 a 14 años
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="tiempopuestoactual" id="55" value="55"/>
                  <label className="form-check-label" htmlFor="55">
                  Entre 15 a 19 años
                  </label>
              </div>     
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="tiempopuestoactual" id="56" value="56"/>
                  <label className="form-check-label" htmlFor="56">
                  Entre 20 a 24 años
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="tiempopuestoactual" id="57" value="57"/>
                  <label className="form-check-label" htmlFor="57">
                  De 25 años a más
                  </label>
              </div>
            </div>           
          </div>
        </fieldset>

        {/* <!-- Opciones Tiempo experiencia laboral  --> */}  
        <fieldset className="form-group mt-4">
          <div className="row">
            <legend className="col-form-label col-sm-3 pt-0 col-form-label-lg">Tiempo en el Puesto Actual:</legend>
            <div className="col-sm-9">
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="tiempopuestoactual" id="58" value="58"/>
                  <label className="form-check-label" htmlFor="58">
                  Menos de 6 meses
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="tiempopuestoactual" id="59" value="59"/>
                  <label className="form-check-label" htmlFor="59">
                  Entre 6 meses y 1 año
                  </label>
              </div>     
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="tiempopuestoactual" id="60" value="60"/>
                  <label className="form-check-label" htmlFor="60">
                  Entre 1 a 4 años
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="tiempopuestoactual" id="61" value="61"/>
                  <label className="form-check-label" htmlFor="61">
                  Entre 5 a 9 años
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="tiempopuestoactual" id="62" value="62"/>
                  <label className="form-check-label" htmlFor="62">
                  Entre 10 a 14 años
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="tiempopuestoactual" id="63" value="63"/>
                  <label className="form-check-label" htmlFor="63">
                  Entre 15 a 19 años
                  </label>
              </div>     
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="tiempopuestoactual" id="64" value="64"/>
                  <label className="form-check-label" htmlFor="64">
                  Entre 20 a 24 años
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="tiempopuestoactual" id="65" value="65"/>
                  <label className="form-check-label" htmlFor="65">
                  De 25 años a más
                  </label>
              </div>
            </div>           
          </div>
        </fieldset>

        {/* Boton Guerdae */}
        <div class="d-grid gap-2 mt-4 mb-4">
          <button ype="submit" class="btn btn-primary">Guardar Respuestas Cuestionario Fase 1</button>
        </div>


      </form>
    </div>

  
  )
}

export default Fase1