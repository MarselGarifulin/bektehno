import Container  from '@mui/material/Container'
import React from 'react'
import MiniDrawer from '../../components/CoreLayout/AdminHeader'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ui.css'
import { Badge, Button, ButtonGroup, Dropdown, FormControl, InputGroup, Pagination, ToggleButton } from 'react-bootstrap';
import Posts from './Posts';






const Order = () => {

  
  


    return (
        <div>
            <MiniDrawer />
            <Container maxWidth="lg">
            <section className="content-main">

<div className="content-header">
    <p className="content-title">Buyurtma</p>
    <div>
        <a href="#" className="btn btn-3">+  Yarating</a>
    </div>
</div>

<div className="card mb-4">
    <header className="card-header">
        <div className="row gx-3">
            <div className="col-lg-4 col-md-6 me-auto">
            <InputGroup className="search mb-3">
    <FormControl
      placeholder="Buyurtma ID sini kiriting"
      aria-label="Buyurtma ID sini kiriting"
      aria-describedby="basic-addon2"
    />{' '} 
     <Button variant="outline-secondary" id="button-addon2" className='btn-search'>
     <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 10.8508C3 6.51492 6.51492 3 10.8508 3C15.1867 3 18.7016 6.51492 18.7016 10.8508C18.7016 15.1867 15.1867 18.7016 10.8508 18.7016C6.51492 18.7016 3 15.1867 3 10.8508ZM10.8508 1C5.41035 1 1 5.41035 1 10.8508C1 16.2912 5.41035 20.7016 10.8508 20.7016C13.5114 20.7016 15.9256 19.6468 17.6981 17.9327C17.7452 18.0279 17.8084 18.1171 17.8876 18.1964L22.313 22.6218C22.7035 23.0123 23.3367 23.0123 23.7272 22.6218C24.1178 22.2312 24.1178 21.5981 23.7272 21.2076L19.3018 16.7822C19.1843 16.6647 19.0449 16.5825 18.8967 16.5357C20.0335 14.9296 20.7016 12.9682 20.7016 10.8508C20.7016 5.41035 16.2912 1 10.8508 1Z" fill="white"/>
    <path d="M17.6981 17.9327L18.1463 17.711L17.8427 17.0973L17.3505 17.5732L17.6981 17.9327ZM17.8876 18.1964L17.5341 18.5499L17.8876 18.1964ZM22.313 22.6218L22.6666 22.2682L22.313 22.6218ZM23.7272 21.2076L23.3737 21.5611L23.7272 21.2076ZM19.3018 16.7822L19.6554 16.4286L19.3018 16.7822ZM18.8967 16.5357L18.4886 16.2468L18.0926 16.8062L18.7461 17.0125L18.8967 16.5357ZM10.8508 2.5C6.23878 2.5 2.5 6.23878 2.5 10.8508H3.5C3.5 6.79107 6.79107 3.5 10.8508 3.5V2.5ZM19.2016 10.8508C19.2016 6.23878 15.4628 2.5 10.8508 2.5V3.5C14.9105 3.5 18.2016 6.79107 18.2016 10.8508H19.2016ZM10.8508 19.2016C15.4628 19.2016 19.2016 15.4628 19.2016 10.8508H18.2016C18.2016 14.9105 14.9105 18.2016 10.8508 18.2016V19.2016ZM2.5 10.8508C2.5 15.4628 6.23878 19.2016 10.8508 19.2016V18.2016C6.79107 18.2016 3.5 14.9105 3.5 10.8508H2.5ZM1.5 10.8508C1.5 5.6865 5.6865 1.5 10.8508 1.5V0.5C5.13421 0.5 0.5 5.13421 0.5 10.8508H1.5ZM10.8508 20.2016C5.6865 20.2016 1.5 16.0151 1.5 10.8508H0.5C0.5 16.5674 5.13421 21.2016 10.8508 21.2016V20.2016ZM17.3505 17.5732C15.6675 19.2009 13.3765 20.2016 10.8508 20.2016V21.2016C13.6462 21.2016 16.1837 20.0928 18.0457 18.2921L17.3505 17.5732ZM18.2412 17.8428C18.2009 17.8026 18.1695 17.758 18.1463 17.711L17.2499 18.1544C17.3209 18.2977 17.4158 18.4317 17.5341 18.5499L18.2412 17.8428ZM22.6666 22.2682L18.2412 17.8428L17.5341 18.5499L21.9595 22.9753L22.6666 22.2682ZM23.3737 22.2682C23.1784 22.4635 22.8618 22.4635 22.6666 22.2682L21.9595 22.9753C22.5453 23.5611 23.495 23.5611 24.0808 22.9753L23.3737 22.2682ZM23.3737 21.5611C23.5689 21.7564 23.5689 22.073 23.3737 22.2682L24.0808 22.9753C24.6666 22.3895 24.6666 21.4398 24.0808 20.854L23.3737 21.5611ZM18.9483 17.1357L23.3737 21.5611L24.0808 20.854L19.6554 16.4286L18.9483 17.1357ZM18.7461 17.0125C18.8196 17.0357 18.8889 17.0763 18.9483 17.1357L19.6554 16.4286C19.4798 16.253 19.2702 16.1293 19.0472 16.0589L18.7461 17.0125ZM20.2016 10.8508C20.2016 12.8614 19.5676 14.7224 18.4886 16.2468L19.3048 16.8246C20.4995 15.1368 21.2016 13.0751 21.2016 10.8508H20.2016ZM10.8508 1.5C16.0151 1.5 20.2016 5.6865 20.2016 10.8508H21.2016C21.2016 5.13421 16.5674 0.5 10.8508 0.5V1.5Z" fill="white"/>
    </svg>

    </Button>
    </InputGroup>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
            <Dropdown>
    <Dropdown.Toggle  className='drop-toggle' variant='Secondary' id="dropdown-basic">
            Change holati
        </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">-------</Dropdown.Item>
                <Dropdown.Item href="#/action-2">-------</Dropdown.Item>
                <Dropdown.Item href="#/action-3">-------</Dropdown.Item>
             </Dropdown.Menu>
        </Dropdown>
            </div>
        </div>
    </header> 
    <div className="card-body">
    <div className="table-responsive">
        <table className="table table-hover">
            <thead>
                <tr>
                    <th># ID</th>
                    <th scope="col">Name</th>
                    <th scope="col"># Buyer ID</th>
                    <th scope="col">Holat</th>
                    <th scope="col">Sana</th>
                    <th scope="col">Amallar</th>
                
                </tr>
            </thead>
            <tbody>
                <tr>
                   <Posts />
                </tr>
                
            </tbody>
        </table> 
  
    </div> 
    </div> 
</div>


</section> 





</Container>

        </div>
    )
}

export default Order
function setChecked(checked: boolean): void {
    throw new Error('Function not implemented.');
}

