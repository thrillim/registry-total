const prediction = 123;

export default function NextMonthPrediction() {
    return (
        <>
            <div className="container my-6">
                <h2 className="text-xl font-semibold">Dự đoán số lượng xe đăng kiểm tháng tới: 
                    <span className="text-accent"> {prediction} </span>
                    xe.
                </h2>
            </div>
        </>
    )
};