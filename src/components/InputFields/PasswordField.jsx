import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Controller } from 'react-hook-form';

const PasswordField = ({ name, control, label, ...restProps }) => {
	const [showPassword, setShowPassword] = useState(false);

	const toggleShowPassword = () => {
		setShowPassword(x => !x);
	};

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, formState: { errors } }) => {
				return (
					<TextField
						type={showPassword ? 'text' : 'password'}
						label={label}
						fullWidth
						{...field}
						size="small"
						error={!!errors[name]}
						helperText={errors[name]?.message || restProps.helperText}
						sx={{
							'& fieldset': {
								width: '100%',
								borderRadius: '100px'
							},
							marginBottom: '10px'
						}}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton aria-label="toggle password visibility" onClick={toggleShowPassword} edge="end">
										{showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							)
						}}
					/>
				);
			}}
		/>
	);
};

PasswordField.propTypes = {
	name: PropTypes.string.isRequired,
	control: PropTypes.object.isRequired,
	label: PropTypes.string.isRequired
};

export default PasswordField;
