import React from "react";

export function Home(props) {
	// const [minutos, setMinutos] = useState(0);
	// console.log(props);
	let a = props;
	// console.log(a.primero);
	const parar = () => {
		a = 0;
	};
	return (
		<div className="d-flex flex-column align-items-center">
			<div className="container mt-5 bg-dark d-flex rounded justify-content-center align-items-center text-white">
				<div className="box bg-secondary d-flex justify-content-center align-items-center">
					<img src="https://img.icons8.com/ultraviolet/120/000000/clock--v2.png" />
				</div>
				<div className="box text-center bg-secondary mx-5 d-flex justify-content-center align-items-center">
					<div>
						<h3>Horas:</h3>
						<h1>{a.tercero}</h1>
					</div>
				</div>
				<div className="box text-center bg-secondary mx-5 d-flex justify-content-center align-items-center">
					<div>
						<h3>Minutos:</h3>
						<h1>{a.segundo}</h1>
					</div>
				</div>
				<div className="box text-center bg-secondary mx-5 d-flex justify-content-center align-items-center">
					<div>
						<h3>Segundos:</h3>
						<h1>{a.primero}</h1>
					</div>
				</div>
			</div>
			{/* <button onClick={parar}>Stop</button> */}
		</div>
	);
}
