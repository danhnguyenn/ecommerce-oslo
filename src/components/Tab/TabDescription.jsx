import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

const TabDescription = () => {
	const { state } = useLocation();
	return (
		<Box>
			<div className="tab-content" id="pills-tabContent">
				<div className="tab-pane fade" id="description" role="tabpanel" aria-labelledby="description-tab">
					<div className="details-product">
						<p
							style={{
								fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
								fontWeight: 'normal',
								lineHeight: '22px',
								color: '#767676',
								marginBottom: '18px',
								marginTop: 'calc(-4px + (-2 + 4) * ((100vw - 320px) / (1920 - 320)))'
							}}
						>
							{state.description}
						</p>

						<div className="title-box4 mb-3 mt-4">
							<h4 className="heading mt-0">
								Comfort: <span className="bg-theme-blue"> </span>
							</h4>
						</div>

						<p
							style={{
								fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
								fontWeight: 'normal',
								lineHeight: '22px',
								color: '#767676',
								marginBottom: '18px',
								marginTop: 'calc(-4px + (-2 + 4) * ((100vw - 320px) / (1920 - 320)))'
							}}
						>
							{state.description}
						</p>

						<div
							className="row g-3 g-lg-4 ratio_landscape mb-3"
							style={{
								display: 'flex',
								alignItems: 'center',
								gap: '10px'
							}}
						>
							<div className="col-md-4">
								<img
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIb3PtdMN8u2kp-iBlNtMGvqglrw7omaLEvw&usqp=CAU"
									alt="Image"
								/>
							</div>

							<div className="col-md-8">
								<div className="speciation-summery">
									<ul
										className="general-summery"
										style={{
											margin: 0,
											padding: 0
										}}
									>
										<li
											style={{
												listStyle: 'none'
											}}
										>
											<svg
												style={{
													width: 'calc(18px + (20 - 18) * ((100vw - 320px) / (1920 - 320)))',
													height: 'calc(18px + (20 - 18) * ((100vw - 320px) / (1920 - 320)))',
													stroke: '#0f8fac',
													marginRight: '5px'
												}}
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="feather feather-check-circle"
											>
												<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
												<polyline points="22 4 12 14.01 9 11.01" />
											</svg>
											<span
												style={{
													fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
													color: '#767676',
													fontWeight: 'normal',
													width: 'calc(100% - calc(28px + (35 - 28) * ((100vw - 320px) / (1920 - 320))));'
												}}
											>
												{' '}
												Madness mixed with a hint of wicked along
											</span>
										</li>
										<li style={{ listStyle: 'none' }}>
											<svg
												style={{
													width: 'calc(18px + (20 - 18) * ((100vw - 320px) / (1920 - 320)))',
													height: 'calc(18px + (20 - 18) * ((100vw - 320px) / (1920 - 320)))',
													stroke: '#0f8fac',
													marginRight: '5px'
												}}
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="feather feather-check-circle"
											>
												<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
												<polyline points="22 4 12 14.01 9 11.01" />
											</svg>
											<span
												style={{
													fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
													color: '#767676',
													fontWeight: 'normal',
													width: 'calc(100% - calc(28px + (35 - 28) * ((100vw - 320px) / (1920 - 320))));'
												}}
											>
												Tingling spiciness of twisted humour bottled up in intriguing grandeur
											</span>
										</li>
										<li style={{ listStyle: 'none' }}>
											<svg
												style={{
													width: 'calc(18px + (20 - 18) * ((100vw - 320px) / (1920 - 320)))',
													height: 'calc(18px + (20 - 18) * ((100vw - 320px) / (1920 - 320)))',
													stroke: '#0f8fac',
													marginRight: '5px'
												}}
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="feather feather-check-circle"
											>
												<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
												<polyline points="22 4 12 14.01 9 11.01" />
											</svg>
											<span
												style={{
													fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
													color: '#767676',
													fontWeight: 'normal',
													width: 'calc(100% - calc(28px + (35 - 28) * ((100vw - 320px) / (1920 - 320))));'
												}}
											>
												Comfortable and stylish all day long.Indigo shirt with western yoke
											</span>
										</li>
										<li style={{ listStyle: 'none' }}>
											<svg
												style={{
													width: 'calc(18px + (20 - 18) * ((100vw - 320px) / (1920 - 320)))',
													height: 'calc(18px + (20 - 18) * ((100vw - 320px) / (1920 - 320)))',
													stroke: '#0f8fac',
													marginRight: '5px'
												}}
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="feather feather-check-circle"
											>
												<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
												<polyline points="22 4 12 14.01 9 11.01" />
											</svg>
											<span
												style={{
													fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
													color: '#767676',
													fontWeight: 'normal',
													width: 'calc(100% - calc(28px + (35 - 28) * ((100vw - 320px) / (1920 - 320))));'
												}}
											>
												Intriguing grandeur cursive language which looks great on a white color.
											</span>
										</li>
										<li style={{ listStyle: 'none' }}>
											<svg
												style={{
													width: 'calc(18px + (20 - 18) * ((100vw - 320px) / (1920 - 320)))',
													height: 'calc(18px + (20 - 18) * ((100vw - 320px) / (1920 - 320)))',
													stroke: '#0f8fac',
													marginRight: '5px'
												}}
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="feather feather-check-circle"
											>
												<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
												<polyline points="22 4 12 14.01 9 11.01" />
											</svg>
											<span
												style={{
													fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
													color: '#767676',
													fontWeight: 'normal',
													width: 'calc(100% - calc(28px + (35 - 28) * ((100vw - 320px) / (1920 - 320))));'
												}}
											>
												Synthetic fibres like rayon. It is light in weight and is soft{' '}
											</span>
										</li>
										<li style={{ listStyle: 'none' }}>
											<svg
												style={{
													width: 'calc(18px + (20 - 18) * ((100vw - 320px) / (1920 - 320)))',
													height: 'calc(18px + (20 - 18) * ((100vw - 320px) / (1920 - 320)))',
													stroke: '#0f8fac',
													marginRight: '5px'
												}}
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="feather feather-check-circle"
											>
												<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
												<polyline points="22 4 12 14.01 9 11.01" />
											</svg>
											<span
												style={{
													fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
													color: '#767676',
													fontWeight: 'normal',
													width: 'calc(100% - calc(28px + (35 - 28) * ((100vw - 320px) / (1920 - 320))));'
												}}
											>
												Minima possums, pariah&apos;s sed, quasi provident dolorous molesting
											</span>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<p
							style={{
								fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
								fontWeight: 'normal',
								lineHeight: '22px',
								color: '#767676',
								marginBottom: '18px',
								marginTop: 'calc(-4px + (-2 + 4) * ((100vw - 320px) / (1920 - 320)))'
							}}
						>
							Smart rich stretch viscose green yellow poly- blend fabric spaghetti straps figure-skimming fit. Tops
							shift shape rich fabric relaxed fitting size true black gold zip virgin wool. Stretch lining hemline above
							knee burgundy satin finish concealed zip small buttons rayon.
						</p>

						<div className="title-box4 mb-3 mt-4">
							<h4 className="heading mt-0">
								Material Details <span className="bg-theme-blue">{null}</span>
							</h4>
						</div>
						<p
							style={{
								fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
								fontWeight: 'normal',
								lineHeight: '22px',
								color: '#767676',
								marginBottom: '18px',
								marginTop: 'calc(-4px + (-2 + 4) * ((100vw - 320px) / (1920 - 320)))'
							}}
						>
							Glass is a heady concoction of madness mixed with a hint of wicked along with several bursts of wicked
							along with several bursts outrageousness and a tingling spiciness of twisted humour bottled up in
							intriguing grandeur
						</p>
						<p
							style={{
								fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
								fontWeight: 'normal',
								lineHeight: '22px',
								color: '#767676',
								marginBottom: '18px',
								marginTop: 'calc(-4px + (-2 + 4) * ((100vw - 320px) / (1920 - 320)))'
							}}
						>
							Structured chic panels power party flattering ultimate trim back pencil silhouette perfect look. Best
							seller signature waist cut pockets cotton-mix navy blue tailoring elegant cashmere. Stretch lining hemline
							above knee burgundy satin finish concealed zip small buttons rayon. Tops shift shape rich fabric relaxed
							fitting size true black gold zip virgin wool. Stretch lining hemline above knee burgundy satin finish
							concealed zip small buttons rayon.
						</p>
						<div className="row row g-3 g-lg-4">
							<div className="col-md-8 order-2 order-md-1">
								<div className="speciation-summery">
									<ul
										className="general-summery"
										style={{
											margin: 0,
											padding: 0
										}}
									>
										<li style={{ listStyle: 'none' }}>
											<svg
												style={{
													width: 'calc(18px + (20 - 18) * ((100vw - 320px) / (1920 - 320)))',
													height: 'calc(18px + (20 - 18) * ((100vw - 320px) / (1920 - 320)))',
													stroke: '#0f8fac',
													marginRight: '5px'
												}}
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="feather feather-check-circle"
											>
												<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
												<polyline points="22 4 12 14.01 9 11.01" />
											</svg>
											<span
												style={{
													fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
													color: '#767676',
													fontWeight: 'normal',
													width: 'calc(100% - calc(28px + (35 - 28) * ((100vw - 320px) / (1920 - 320))));'
												}}
											>
												Tingling spiciness of twisted humour bottled up in intriguing grandeur
											</span>
										</li>
										<li style={{ listStyle: 'none' }}>
											<svg
												style={{
													width: 'calc(18px + (20 - 18) * ((100vw - 320px) / (1920 - 320)))',
													height: 'calc(18px + (20 - 18) * ((100vw - 320px) / (1920 - 320)))',
													stroke: '#0f8fac',
													marginRight: '5px'
												}}
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="feather feather-check-circle"
											>
												<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
												<polyline points="22 4 12 14.01 9 11.01" />
											</svg>
											<span
												style={{
													fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
													color: '#767676',
													fontWeight: 'normal',
													width: 'calc(100% - calc(28px + (35 - 28) * ((100vw - 320px) / (1920 - 320))));'
												}}
											>
												Comfortable and stylish all day long.Indigo shirt with western yoke
											</span>
										</li>
										<li style={{ listStyle: 'none' }}>
											<svg
												style={{
													width: 'calc(18px + (20 - 18) * ((100vw - 320px) / (1920 - 320)))',
													height: 'calc(18px + (20 - 18) * ((100vw - 320px) / (1920 - 320)))',
													stroke: '#0f8fac',
													marginRight: '5px'
												}}
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="feather feather-check-circle"
											>
												<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
												<polyline points="22 4 12 14.01 9 11.01" />
											</svg>
											<span
												style={{
													fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
													color: '#767676',
													fontWeight: 'normal',
													width: 'calc(100% - calc(28px + (35 - 28) * ((100vw - 320px) / (1920 - 320))));'
												}}
											>
												Intriguing grandeur cursive language which looks great on a white color.
											</span>
										</li>
										<li style={{ listStyle: 'none' }}>
											<svg
												style={{
													width: 'calc(18px + (20 - 18) * ((100vw - 320px) / (1920 - 320)))',
													height: 'calc(18px + (20 - 18) * ((100vw - 320px) / (1920 - 320)))',
													stroke: '#0f8fac',
													marginRight: '5px'
												}}
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="feather feather-check-circle"
											>
												<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
												<polyline points="22 4 12 14.01 9 11.01" />
											</svg>
											<span
												style={{
													fontSize: 'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))',
													color: '#767676',
													fontWeight: 'normal',
													width: 'calc(100% - calc(28px + (35 - 28) * ((100vw - 320px) / (1920 - 320))));'
												}}
											>
												Synthetic fibres like rayon. It&apos;s light in weight and is soft{' '}
											</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Box>
	);
};
export default TabDescription;
