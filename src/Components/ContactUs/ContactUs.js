import { Button, TextField, useMediaQuery } from '@mui/material';
import axios from '../../config/axiosConfig';
import React, { useState } from 'react';
import styles from './ContactUs.module.scss';

function ContactUs() {

    const smallScreen = useMediaQuery('(max-width:600px)');

    const [response, setresponse] = useState(false)

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        let data = {}
        data.name = name
        data.email = email
        data.description = message

        axios.post('/app/contact-us', data)
            .then((response) => {
                setresponse(true)
            })
    }

    return (
        <div
            className={styles.contactus}
        >
            {response ? (
                <div
                    className={styles.responsesavedcontainer}
                >
                    Response Saved
                </div>
            ) : (
                <form
                    className={styles.contactusform}
                    onSubmit={handleSubmit}
                >
                    <div
                        className={styles.formtwosection}
                    >
                        <TextField
                            style={{
                                marginTop: '20px'
                            }}
                            fullWidth={smallScreen}
                            label="Name"
                            variant="outlined"
                            type="text"
                            required={true}
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />

                        <TextField
                            style={{
                                marginTop: '20px'
                            }}
                            fullWidth={smallScreen}
                            label="Email"
                            variant="outlined"
                            type="text"
                            required={true}
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>

                    <div
                        className={styles.formsection}
                    >
                        <TextField
                            fullWidth
                            multiline
                            label="Message"
                            variant="outlined"
                            type="text"
                            required={true}
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                        />
                    </div>

                    <div
                        style={{
                            marginTop: '20px'
                        }}
                    >
                        <Button
                            // className={styles.submitbtn}
                            variant="contained"
                            type="submit"
                            label="Submit"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            )}

        </div >
    )
}

export default ContactUs
