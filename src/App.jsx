import { useState } from "react";
import "./App.css";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export function App() {
  return (
    <div className="App">
      <Container />
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


function Container(){
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return(
    <div className="container">
       <Box
      sx={{ bgcolor: 'lightGrey', display: 'flex' , minHeight : '150px' , width : "500px"}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="CONTACTS" />
        <Tab label="CHARTS & MAPS" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ContactList/>
      </TabPanel>
      <TabPanel value={value} index={1}>
         charts
      </TabPanel>
    </Box>
    </div>
  )
}



function ContactList() {
  const [contactlist, setContactList] = useState([
    {
      name: "abdul",
      email: "razeeth011@gmail.com",
    },
  ]);

  return (
    <div className="contact-list">
      {contactlist.map((contact,index) => (
        <Contact key={index} name={contact.name} email={contact.email} />
      ))}
      <CreateContact/>
    </div>
  );
}

function CreateContact(){
  return(
    <div className="create-contact">
      <button>dd</button>
    </div>
  )
}

function Contact({ name, email}) {
  return (
    <div className="contact">
      <p>{name}</p>
      <p>{email}</p>
      <div className="edit-button">
      <EditIcon/>
      <DeleteIcon/>
      </div>
    </div>
  );
}
