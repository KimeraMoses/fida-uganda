import classes from '../../../../Membership/Members/NewMemberForm/MultiForm/MultiForm.module.css';
import ActionButtons from '../../../../Membership/Members/NewMemberForm/MultiForm/ActionButtons/ActionButtons';
import {
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack,
  useToast,
} from '@chakra-ui/react';
import BenTable from './BeneficiariesTable';
import withForm from '../../../../../hoc/withForm';
import AddBeneficiariesForm from './AddBeneficiariesForm';
import { toastError } from '../../../../../lib/toastDetails';
import { useDispatch } from 'react-redux';
import { selectClient } from '../../../../../store/clientReducer';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const MultForm4 = ({
  values,
  setFieldValue,
  page,
  limit,
  onBack,
  isSubmitting,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editValues, setEditValues] = useState({});
  const toast = useToast();
  const dispatch = useDispatch();

  const handleGoBack = () => {
    dispatch(selectClient(values));
    onBack();
  };

  const addBeneficiary = (beneficiary) => {
    if (values?.beneficiaries.length >= 10) {
      toast(toastError(`You can only add 10 beneficiaries`));
      return;
    }
    const newBeneficiary = {
      id: uuidv4(),
      ...beneficiary,
    };
    setFieldValue('beneficiaries', [...values?.beneficiaries, newBeneficiary]);
  };

  const removeBeneficiary = (index) => {
    const newBeneficiaries = [...values?.beneficiaries];
    newBeneficiaries.splice(index, 1);
    setFieldValue('beneficiaries', newBeneficiaries);
  };

  const editBeneficiary = (beneficiary) => {
    if (values?.beneficiaries.length < 0) {
      return;
    }
    const beneficiaries = values?.beneficiaries.map((ben) =>
      ben.id === beneficiary.id ? beneficiary : ben
    );
    setFieldValue('beneficiaries', beneficiaries);
  };

  const setAbout = (option) => {
    setFieldValue('about', option);
  };

  const handleEdit = (item) => {
    setIsEdit(true);
    setEditValues(item);
  };

  return (
    <div className={classes.form_wrapper}>
      <div className={classes.field_wrapper}>
        <div className={classes.field_label}>7. Beneficiaries</div>
        <BenTable
          data={values?.beneficiaries}
          removeBeneficiary={removeBeneficiary}
          handleEdit={handleEdit}
        />
        <AddBeneficiariesForm
          addBeneficiary={addBeneficiary}
          editBeneficiary={editBeneficiary}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          editValues={editValues}
          setEditValues={setEditValues}
        />
      </div>
      <div className={classes.field_wrapper}>
        <div className={classes.field_label}>
          8. How did you know about FIDA?
        </div>
        <RadioGroup
          onChange={setAbout}
          colorScheme="purple"
          style={{ marginLeft: 15 }}
          value={values?.about}
        >
          <SimpleGrid columns={2} spacing={2} style={{ alignItems: 'center' }}>
            <Stack direction="column">
              <Radio value="1">Brochures</Radio>
              <Radio value="2">Posters</Radio>
              <Radio value="3">Legal Education</Radio>
              <Radio value="4">News Papers</Radio>
              <Radio value="5">Workshops</Radio>
              <Radio value="6">Website or Social Media</Radio>
              <Radio value="7">Other CSO</Radio>
            </Stack>
            <Stack direction="column">
              <Radio value="8">Friend/Relative</Radio>
              <Radio value="9">Radio Program</Radio>
              <Radio value="10">Local Council</Radio>
              <Radio value="11">Community Volunteer</Radio>
              <Radio value="12">FIDA - U Member</Radio>
              <Radio value="13">Police</Radio>
              <Radio value="14">Other</Radio>
            </Stack>
          </SimpleGrid>
        </RadioGroup>
      </div>

      <ActionButtons
        page={page}
        onBack={handleGoBack}
        disabled={isSubmitting}
        limit={limit}
      />
    </div>
  );
};

export default withForm(MultForm4);
