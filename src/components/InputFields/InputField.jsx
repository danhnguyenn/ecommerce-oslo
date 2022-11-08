import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

const InputField = ({ name, control, label, type, ...restProps }) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field, formState: { errors } }) => {
				return (
					<TextField
						margin="normal"
						label={label}
						type={type}
						fullWidth
						{...field}
						size="small"
						error={!!errors[name]}
						helperText={errors[name]?.message || restProps.helperText}
						sx={{
							'& fieldset': {
								width: '100%',
								borderRadius: '100px'
							}
						}}
					/>
				);
			}}
		/>
	);
};

InputField.propTypes = {
	name: PropTypes.string.isRequired,
	control: PropTypes.object.isRequired,
	label: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired
};

export default InputField;
