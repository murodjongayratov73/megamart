import { useState } from "react";

function TrackOrder({ onClose }) {
    return (
        <div
            className="track-order-modal"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000,
            }}
        >
            <div
                className="modal-content"
                style={{
                    backgroundColor: "#fff",
                    padding: "30px 20px",
                    borderRadius: "12px",
                    textAlign: "center",
                    width: "90%",
                    maxWidth: "400px",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                }}
            >
                <h3 style={{ marginBottom: "15px", color: "#008ECC" }}>Track Your Order</h3>
                <p style={{ marginBottom: "25px", color: "#333", lineHeight: "1.5" }}>
                    Bu yerda foydalanuvchining buyurtma holatini va trackning 
                    ID va statusni shu yerda quyiladi.
                </p>
                <button
                    onClick={onClose}
                    style={{
                        backgroundColor: "#008ECC",
                        color: "#fff",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontWeight: "bold",
                    }}
                >
                    Close
                </button>
            </div>
        </div>
    );
}

function Nav() {
    const [zip, setZip] = useState("423651");
    const [showTrack, setShowTrack] = useState(false);

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;

                    try {
                        const res = await fetch(
                            `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
                        );
                        const data = await res.json();
                        if (data.address?.postcode) {
                            setZip(data.address.postcode);
                        }
                    } catch (err) {
                        console.error("Zip kod olishda xatolik:", err);
                    }
                },
                (error) => {
                    console.error("Joylashuvni olishda xatolik:", error.message);
                }
            );
        } else {
            alert("Brauzeringiz joylashuvni qo'llab-quvvatlamaydi.");
        }
    };

    return (
        <div className="top-nav">
            <h2>Welcome to worldwide Megamart!</h2>
            <article className="top-nav-btn">
                {/* Location button */}
                <button className="maps-btn" onClick={getLocation}>
                    {/* TO'G'RILANGAN SVG: fill-rule -> fillRule, clip-rule -> clipRule, stroke-linecap -> strokeLinecap, stroke-linejoin -> strokeLinejoin */}
                    <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path 
                            fillRule="evenodd" 
                            clipRule="evenodd" 
                            d="M0.5 6.2392C0.510806 3.05876 3.09782 0.489262 6.27826 0.500034C9.4587 0.510873 12.0282 3.09789 12.0174 6.27833V6.34355C11.9783 8.41094 10.8239 10.3218 9.4087 11.8153C8.59933 12.6558 7.69551 13.3998 6.71522 14.0327C6.4531 14.2594 6.06429 14.2594 5.80217 14.0327C4.3408 13.0815 3.0582 11.8806 2.01304 10.4848C1.08151 9.26776 0.552624 7.79052 0.5 6.25876V6.2392Z" 
                            stroke="#008ECC" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                        />
                        <path 
                            d="M6.25869 8.19573C7.27802 8.19573 8.10434 7.3694 8.10434 6.35008C8.10434 5.33075 7.27802 4.50443 6.25869 4.50443C5.23937 4.50443 4.41304 5.33075 4.41304 6.35008C4.41304 7.3694 5.23937 8.19573 6.25869 8.19573Z" 
                            stroke="#008ECC" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                        />
                    </svg>
                    <p>Deliver to <span>{zip}</span></p>
                </button>

                {/* Track order button */}
                <button className="cur-btn" onClick={() => setShowTrack(true)}>
                    {/* TO'G'RILANGAN SVG: stroke-miterlimit -> strokeMiterlimit, stroke-linecap -> strokeLinecap, stroke-linejoin -> strokeLinejoin */}
                    <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path 
                            d="M5.75 10.25C6.14782 10.25 6.52936 10.092 6.81066 9.81066C7.09196 9.52936 7.25 9.14782 7.25 8.75C7.25 8.35218 7.09196 7.97064 6.81066 7.68934C6.52936 7.40804 6.14782 7.25 5.75 7.25C5.35218 7.25 4.97064 7.40804 4.68934 7.68934C4.40804 7.97064 4.25 8.35218 4.25 8.75C4.25 9.14782 4.40804 9.52936 4.68934 9.81066C4.97064 10.092 5.35218 10.25 5.75 10.25V10.25ZM13.25 10.25C13.6478 10.25 14.0294 10.092 14.3107 9.81066C14.592 9.52936 14.75 9.14782 14.75 8.75C14.75 8.35218 14.592 7.97064 14.3107 7.68934C14.0294 7.40804 13.6478 7.25 13.25 7.25C12.8522 7.25 12.4706 7.40804 12.1893 7.68934C11.908 7.97064 11.75 8.35218 11.75 8.75C11.75 9.14782 11.908 9.52936 12.1893 9.81066C12.4706 10.092 12.8522 10.25 13.25 10.25V10.25Z" 
                            stroke="#008ECC" 
                            strokeMiterlimit="1.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                        />
                        <path 
                            d="M7.2875 8.75H11V0.95C11 0.830653 10.9526 0.716193 10.8682 0.631802C10.7838 0.547411 10.6693 0.5 10.55 0.5H0.5M3.9875 8.75H2.45C2.39091 8.75 2.33239 8.73836 2.27779 8.71575C2.2232 8.69313 2.17359 8.65998 2.1318 8.6182C2.09002 8.57641 2.05687 8.5268 2.03425 8.47221C2.01164 8.41761 2 8.35909 2 8.3V4.625" 
                            stroke="#008ECC" 
                            strokeLinecap="round" 
                        />
                        <path 
                            d="M1.25 2.75H4.25" 
                            stroke="#008ECC" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                        />
                        <path 
                            d="M11 2.75H15.2075C15.2945 2.75002 15.3796 2.77525 15.4525 2.82264C15.5255 2.87002 15.5831 2.93753 15.6185 3.017L16.961 6.038C16.9866 6.09536 16.9999 6.15744 17 6.22025V8.3C17 8.35909 16.9884 8.41761 16.9657 8.47221C16.9431 8.5268 16.91 8.57641 16.8682 8.6182C16.8264 8.65998 16.7768 8.69313 16.7222 8.71575C16.6676 8.73836 16.6091 8.75 16.55 8.75H15.125M11 8.75H11.75" 
                            stroke="#008ECC" 
                            strokeLinecap="round" 
                        />
                    </svg>
                    <p>Track your order</p>
                </button>

                {/* All Offers button */}
                <button className="All-Offers-btn">
                    {/* TO'G'RILANGAN SVG: fill-rule -> fillRule, clip-rule -> clipRule, stroke-linecap -> strokeLinecap, stroke-linejoin -> strokeLinejoin */}
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path 
                            fillRule="evenodd" 
                            clipRule="evenodd" 
                            d="M2.0331 3.72894C2.0331 2.79219 2.79285 2.03244 3.72885 2.03244H4.5006C4.9476 2.03244 5.37735 1.85544 5.69535 1.53969L6.2346 0.999693C6.89535 0.335943 7.96935 0.332943 8.6331 0.993693L8.63985 0.999693L9.17985 1.53969C9.4971 1.85544 9.92685 2.03244 10.3746 2.03244H11.1456C12.0824 2.03244 12.8421 2.79219 12.8421 3.72894V4.49919C12.8421 4.94769 13.0191 5.37669 13.3349 5.69469L13.8749 6.23469C14.5386 6.89544 14.5424 7.96869 13.8816 8.63319L13.8749 8.63994L13.3349 9.17994C13.0191 9.49644 12.8421 9.92694 12.8421 10.3739V11.1457C12.8421 12.0824 12.0824 12.8414 11.1456 12.8414H10.3746C9.92685 12.8414 9.4971 13.0192 9.17985 13.3349L8.63985 13.8742C7.97985 14.5387 6.90585 14.5417 6.24135 13.8809C6.2391 13.8787 6.23685 13.8764 6.2346 13.8742L5.69535 13.3349C5.37735 13.0192 4.9476 12.8414 4.5006 12.8414H3.72885C2.79285 12.8414 2.0331 12.0824 2.0331 11.1457V10.3739C2.0331 9.92694 1.85535 9.49644 1.5396 9.17994L1.00035 8.63994C0.33585 7.97919 0.332851 6.90519 0.9936 6.24144L1.00035 6.23469L1.5396 5.69469C1.85535 5.37669 2.0331 4.94769 2.0331 4.49919V3.72894Z" 
                            stroke="#008ECC" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                        />
                        <path 
                            d="M5.50989 9.36422L9.36489 5.50922" 
                            stroke="#008ECC" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                        />
                        <path 
                            d="M9.36243 9.9289C9.21243 9.9289 9.06993 9.8689 8.96493 9.7639C8.91243 9.7114 8.87493 9.6439 8.84493 9.5764C8.81493 9.5089 8.79993 9.44215 8.79993 9.3664C8.79993 9.2914 8.81493 9.2164 8.84493 9.1489C8.87493 9.0814 8.91243 9.0214 8.96493 8.9689C9.17493 8.7589 9.54993 8.7589 9.75993 8.9689C9.81243 9.0214 9.85743 9.0814 9.88743 9.1489C9.90993 9.2164 9.92493 9.2914 9.92493 9.3664C9.92493 9.44215 9.90993 9.5089 9.88743 9.5764C9.85743 9.6439 9.81243 9.7114 9.75993 9.7639C9.65493 9.8689 9.51243 9.9289 9.36243 9.9289Z" 
                            fill="#008ECC" 
                        />
                        <path 
                            d="M5.50732 6.07418C5.43232 6.07418 5.36482 6.05843 5.29732 6.02843C5.22982 5.99843 5.16232 5.96168 5.10982 5.90918C5.05732 5.84918 5.01982 5.78918 4.98982 5.72168C4.95982 5.65343 4.94482 5.58668 4.94482 5.51168C4.94482 5.43593 4.95982 5.36168 4.98982 5.29418C5.01982 5.22668 5.05732 5.15918 5.10982 5.11418C5.32732 4.90343 5.69482 4.90343 5.90482 5.11418C6.00982 5.21843 6.06982 5.36168 6.06982 5.51168C6.06982 5.58668 6.06232 5.65343 6.03232 5.72168C6.00232 5.78918 5.95732 5.84918 5.90482 5.90918C5.85232 5.96168 5.79232 5.99843 5.72482 6.02843C5.65732 6.05843 5.58232 6.07418 5.50732 6.07418Z" 
                            fill="#008ECC" 
                        />
                    </svg>
                    <p>All Offers</p>
                </button>

                {showTrack && <TrackOrder onClose={() => setShowTrack(false)} />}
            </article>
        </div>
    );
}

export default Nav;