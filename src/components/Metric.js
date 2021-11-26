import PropTypes from 'prop-types'

const Metric = (props) => {
    return ( 
        <div className="col-md-4 mb-4">
						<div className={`card border-left-${props.color} shadow h-100 py-2`}>
							<div className="card-body">
								<div className="row no-gutters align-items-center">
									<div className="col mr-2">
										<div className={`text-xs font-weight-bold text-${props.color} text-uppercase mb-1`}>{props.title}</div>
										<div className="h5 mb-0 font-weight-bold text-gray-800">{props.value}</div>
									</div>
									<div className="col-auto">
										<i className={`fas ${props.icon} fa-2x text-gray-300`}></i>
									</div>
								</div>
							</div>
						</div>
					</div>


     );
}

Metric.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
   value: PropTypes.number,
    icon: PropTypes.string,
}

Metric.defaultProps = {
    color : 'danger',
    title : 'A cool Movie',
    value : '99',
    icon : 'fa-burguer'
}
 
export default Metric;