export function MapIllustration() {
  return (
    <svg viewBox="0 0 390 260" className="h-auto w-full" role="img" aria-label="Neighborhood map">
      <g fill="none" stroke="#F05323" strokeWidth="6" strokeLinecap="round">
        <path d="M0 128 H390" />
        <path d="M168 0 V260" />
        <path d="M168 128 L250 18" />
        <path d="M250 128 H390" opacity="0.9" />
      </g>
      <g fill="none" stroke="#E8DCC8" strokeWidth="3">
        <rect x="28" y="148" width="70" height="46" />
        <rect x="108" y="148" width="48" height="70" />
        <rect x="28" y="202" width="70" height="40" />
        <rect x="188" y="148" width="90" height="52" />
        <rect x="188" y="44" width="70" height="62" />
        <rect x="268" y="44" width="80" height="62" />
        <rect x="300" y="148" width="70" height="70" />
      </g>
      <rect x="178" y="132" width="46" height="28" rx="3" fill="#E8E4DC" stroke="#C9C3B8" />
      <text x="201" y="144" textAnchor="middle" fill="#6b6570" fontSize="7" fontFamily="Poppins, sans-serif">
        Duman
      </text>
      <text x="201" y="154" textAnchor="middle" fill="#6b6570" fontSize="7" fontFamily="Poppins, sans-serif">
        Mall
      </text>
      <text x="78" y="122" fill="#1E1E1E" fontSize="13" fontFamily="Poppins, sans-serif" fontWeight="600">
        Darya Blvd
      </text>
      <text x="230" y="122" fill="#1E1E1E" fontSize="13" fontFamily="Poppins, sans-serif" fontWeight="600">
        Modiriyat Blvd
      </text>
      <text
        x="148"
        y="78"
        fill="#1E1E1E"
        fontSize="13"
        fontFamily="Poppins, sans-serif"
        fontWeight="600"
        transform="rotate(-72 148 78)"
      >
        Saadat Blvd
      </text>
      <text
        x="158"
        y="200"
        fill="#1E1E1E"
        fontSize="13"
        fontFamily="Poppins, sans-serif"
        fontWeight="600"
        transform="rotate(-90 158 200)"
      >
        Sharifi Blvd
      </text>
      <text x="60" y="176" fill="#8a8380" fontSize="10" fontFamily="Poppins, sans-serif">
        Towhid 4
      </text>
      <text x="60" y="228" fill="#8a8380" fontSize="10" fontFamily="Poppins, sans-serif">
        Towhid 3
      </text>
      <text x="248" y="178" fill="#8a8380" fontSize="10" fontFamily="Poppins, sans-serif">
        Masoud Alley
      </text>
    </svg>
  );
}
