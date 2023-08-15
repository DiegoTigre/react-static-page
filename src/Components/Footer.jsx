
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
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
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
                Saltillo Coahuila
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                concretospepi.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
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
