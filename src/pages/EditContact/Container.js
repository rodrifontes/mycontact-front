import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import ContactsService from '../../services/ContactsService';
import toast from '../../utils/toast';
import useSafeAsyncAction from '../../hooks/useSafeAsyncAction';

import Presentation from './Presentation';

export default function Container() {
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState('');

  const contactFormRef = useRef(null);

  const { id } = useParams();
  const history = useHistory();
  const safeAsyncAction = useSafeAsyncAction();

  useEffect(() => {
    async function loadContact() {
      try {
        const contact = await ContactsService.getContactById(
          id,
        );

        safeAsyncAction(() => {
          contactFormRef.current.setFieldsValues(contact);

          setIsLoading(false);
          setContactName(contact.name);
        });
      } catch {
        safeAsyncAction(() => {
          history.push('/');
          toast({
            type: 'danger',
            text: 'Contato não econtrado!',
          });
        });
      }
    }

    loadContact();
  }, [id, history, safeAsyncAction]);

  async function handleSubmit(contact) {
    try {
      const contactData = await ContactsService.updateContact(id, contact);

      setContactName(contactData.name);

      toast({
        type: 'sucess',
        text: 'Contato alterado com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao alterar o contato!',
      });
    }
  }

  return (
    <Presentation
      isLoading={isLoading}
      contactName={contactName}
      contactFormRef={contactFormRef}
      onSubmit={handleSubmit}
    />
  );
}
