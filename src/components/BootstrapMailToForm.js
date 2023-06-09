import React from 'react';
import { Form, Button } from 'react-bootstrap';
import {useTranslation} from "react-i18next";

const BootstrapMailToForm = () => {
    const { t } = useTranslation();

    return (
        <div className="contact-form-section">
            <h2 className="column-title">{t('contactPage.formTitle')}</h2>
            <Form>
                <Form.Group controlId="name">
                    <Form.Label>{t('contactPage.nameLabel')}</Form.Label>
                    <Form.Control type="text" required />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>{t('contactPage.emailLabel')}</Form.Label>
                    <Form.Control type="email" required />
                </Form.Group>

                <Form.Group controlId="message">
                    <Form.Label>{t('contactPage.messageLabel')}</Form.Label>
                    <Form.Control as="textarea" rows={3} required />
                    <Button type="submit" className="custom-button">{t('contactPage.submitButton')}</Button>
                </Form.Group>

                
            </Form>
        </div>
    );
};

export default BootstrapMailToForm;