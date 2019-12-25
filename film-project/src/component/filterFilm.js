import React, { Component } from 'react'

export default class FilterFilm extends Component {
	render() {
		return (
			<section className="filterFilm">
				<div className="container">
					<div className="dropdown">
						<button className="btn btn-warning dropdown-toggle" type="button" id="dropdownByName" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Phim
		</button>
						<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownByName">
							<button className="dropdown-item" type="button">Tên Phim 1</button>
							<button className="dropdown-item" type="button">Tên Phim 2</button>
							<button className="dropdown-item" type="button">Tên Phim 3</button>
						</div>
					</div>
					<div className="dropdown">
						<button className="btn btn-warning dropdown-toggle" type="button" id="dropdownByLocation" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Rạp
		</button>
						<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownByLocation">
							<button className="dropdown-item" type="button">Cụm Rạp 1</button>
							<button className="dropdown-item" type="button">Cụm Rạp 2</button>
							<button className="dropdown-item" type="button">Cụm Rạp 3</button>
						</div>
					</div>
					<div className="dropdown">
						<button className="btn btn-warning dropdown-toggle" type="button" id="dropdownByDate" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Ngày Xem
		</button>
						<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownByDate">
							<button className="dropdown-item" type="button">Thứ 2</button>
							<button className="dropdown-item" type="button">Thứ 3</button>
							<button className="dropdown-item" type="button">Thứ 4</button>
						</div>
					</div>
					<div className="dropdown">
						<button className="btn btn-warning dropdown-toggle" type="button" id="dropdownByShowTime" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Xuất Chiếu
		</button>
						<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownByShowTime">
							<button className="dropdown-item" type="button">Lúc 1h</button>
							<button className="dropdown-item" type="button">Lúc 2h</button>
							<button className="dropdown-item" type="button">Lúc 3h</button>
						</div>
					</div>
					<div className="dropdown">
						<button className="btn btn-warning my-button">Đặt Vé</button>
					</div>
				</div>
			</section>
		)
	}
}
