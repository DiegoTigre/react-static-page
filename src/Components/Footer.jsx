
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export const Footer = () => {
  return (
    <>

<div  style={{
        
        height: '4vh',
        backgroundColor: '#FA0429',
        fontSize: '40px'
      
      }}>   <h2 className="text-white" style={{textAlign: "center"}}></h2></div>
       <div
      style={{
        backgroundColor: '#020881',
        font: 'white'
      }}>
   
    <MDBFooter  className='text-center text-lg-start text-muted'>
      <section style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '0vh',
      
      }}
      className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'
      >
        

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-left text-light mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                BLOCK Y CONCRETOS PEPI
              </h6>
              <p>
                Contamos con mas de 20 años de experiencia dando soluciones en la construccion,
                para inumerables clientes, nosotros atendemos desde el cliente mas pequeño hasta,
                el cliente mas grande en Coahuila y Guanajuato, ofreciendo servicos de calidad,
                desde concretos premezclados, aceleradores, block entre otros.

                Todos nuestros proveedores son seleccionados por la calidad de sus materiales.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Productos</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Concretos
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Block
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Concreto Especializado 
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
              <p>
                <a href='https://www.facebook.com/profile.php?id=100089372575370&locale=es_LA' className='text-reset'>
                  Facebook Concretos PEPI Saltillo - Oficial
                </a>
              </p>
              <p>
                <a href='https://www.facebook.com/profile.php?id=100089494340884&locale=es_LA' className='text-reset'>
                  Favebook Concretos PEPI Irapuato - Oficial
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                
                BLVD. NAZARIO ORTIZ GARZA #354
 				        COL. SALTILLO 400
				        SALTILLO. COAHUILA
				        CP. 25290
                TELEFONOS:		(844) 415-73-10, (844) 416-73-50, (844) 416-3-70
                 
                
              </p>
              <br></br>
              <p>
              SUCURSAL IRAPUATO:  CARR.IRAPUATO-LOMA DE FLORES #1204.
                LOMA DE FLORES . IRAPUATO , GTO. 
                Telefono: (462) 103-03-83
                RFC: 		  	DPP-991203-FW7
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                concretospepi.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> REGISTRO SIEM:	0383
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> REGISTRO PATRONAL: A36-42445-10-2
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 text-light' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          concretospepi.com
        </a>
      </div>
    </MDBFooter>


    </div>
    </>
  )
}
