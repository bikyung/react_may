import Layout from '../common/Layout';
import { useState, useEffect } from 'react';
function Join() {
	const initVal = {
		userid: '',
		email: '',
		pwd1: '',
		pwd2: '',
	};
	const [Val, setVal] = useState(initVal);
	const [Err, setErr] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		console.log('name', name);
		console.log('value', value);
		setVal({ ...Val, [name]: value });
	};

	const handleRadio = (e) => {
		const { name } = e.target;
		const isCheck = e.target.checked;
		setVal({ ...Val, [name]: isCheck });
	};

	const check = (Val) => {
		const errs = {};
		const eng = /[a-zA-Z]/;
		const num = /[0-9]/;
		const spc = /[!@#$%^&*()_+]/;

		if (Val.userid.length < 5) {
			errs.userid = '아이디를 5글자이상 입력하세요.';
		}

		if (Val.email.length < 8 || !/@/.test(Val.email)) {
			errs.email = '이메일을 8글자이상 @를 포함해주세요.';
		}

		if (
			Val.pwd1.length < 5 ||
			!eng.test(Val.pwd1) ||
			!num.test(Val.pwd1) ||
			!spc.test(Val.pwd1)
		) {
			errs.pwd1 =
				'비밀번호는 5글자이상, 영문, 숫자, 특수문자를 모두 포함하세요.';
		}
		if (Val.pwd1 !== Val.pwd2 || !Val.pwd2) {
			errs.pwd2 = '비밀번호 2개를 동일하게 입력하세요.';
		}

		return errs;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErr(check(Val));
	};

	useEffect(() => {}, [Err]);
	return (
		<Layout name={'Join'}>
			<form onSubmit={handleSubmit}>
				<fieldset>
					<legend>회원가입 양식</legend>
					<table border='1'>
						<caption>회원가입 정보입력</caption>
						<tbody>
							{/*userid*/}
							<tr>
								<th scope='row'>
									<label htmlFor='useid'>USER ID</label>
								</th>
								<td>
									<input
										type='text'
										name='userid'
										id='userid'
										placeholder='아이디를 입력하세요'
										value={Val.userid}
										onChange={handleChange}
									/>
									<span className='err'>{Err.userid}</span>
								</td>
							</tr>
							{/*password*/}
							<tr>
								<th scope='row'>
									<label htmlFor='pwd1'>PASSWORD</label>
								</th>
								<td>
									<input
										type='password'
										name='pwd1'
										id='pwd1'
										placeholder='비밀번호를 입력하세요'
										value={Val.pwd1}
										onChange={handleChange}
									/>
									<span className='err'>{Err.pwd1}</span>
								</td>
							</tr>
							{/*password2*/}
							<tr>
								<th scope='row'>
									<label htmlFor='pwd2'>RE-PASSWORD</label>
								</th>
								<td>
									<input
										type='password'
										name='pwd2'
										id='pwd2'
										placeholder='비밀번호를 재 입력하세요'
										value={Val.pwd2}
										onChange={handleChange}
									/>
									<span className='err'>{Err.pwd2}</span>
								</td>
							</tr>
							{/*email*/}
							<tr>
								<th scope='row'>
									<label htmlFor='email'>E-MAIL</label>
								</th>
								<td>
									<input
										type='text'
										name='email'
										id='email'
										placeholder='이메일 주소를 입력하세요'
										value={Val.email}
										onChange={handleChange}
									/>
									<span className='err'>{Err.email}</span>
								</td>
							</tr>
							{/*gender*/}
							<tr>
								<th scope='row'>GENDER</th>
								<td>
									<label htmlFor='male'>Male</label>
									<input
										type='radio'
										name='gender'
										id='male'
										onChange={handleRadio}
									/>
									<label htmlFor='female'>Female</label>
									<input
										type='radio'
										name='gender'
										id='female'
										onChange={handleRadio}
									/>
									<span className='err'>{Err.gender}</span>
								</td>
							</tr>
							<tr>
								<th colSpan='2'>
									<input type='reset' value='CANCEL' />
									<input type='submit' value='SUBMIT' />
								</th>
							</tr>
						</tbody>
					</table>
				</fieldset>
			</form>
		</Layout>
	);
}

export default Join;
