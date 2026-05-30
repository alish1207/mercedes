export default function ProductIcon({ icon, accent, size = 90 }) {
  const a = accent;
  const icons = {
    jacket: (
      <svg width={size} height={size} viewBox="0 0 90 90">
        <path d="M12 40 L26 22 L37 29 L45 25 L53 29 L64 22 L78 40 L68 43 L68 72 L22 72 L22 43 Z" fill={a} opacity=".18"/>
        <path d="M37 29 L37 72" stroke={a} strokeWidth="1.2" opacity=".35"/>
        <path d="M53 29 L53 72" stroke={a} strokeWidth="1.2" opacity=".35"/>
        <circle cx="45" cy="50" r="6" fill={a} opacity=".45"/>
        <text x="45" y="54" textAnchor="middle" fontFamily="Barlow Condensed" fontSize="7" fill={a} fontWeight="800">AMG</text>
      </svg>
    ),
    polo: (
      <svg width={size} height={size} viewBox="0 0 90 90">
        <path d="M28 20 Q45 15 62 20 L72 34 L58 37 L58 72 L32 72 L32 37 L18 34 Z" fill={a} opacity=".18"/>
        <path d="M37 20 L37 31 Q45 36 53 31 L53 20" fill={a} opacity=".28"/>
        <line x1="45" y1="37" x2="45" y2="72" stroke={a} strokeWidth="1.5" opacity=".25"/>
      </svg>
    ),
    hoodie: (
      <svg width={size} height={size} viewBox="0 0 90 90">
        <path d="M20 24 Q45 16 70 24 L76 44 L62 46 L62 72 L28 72 L28 46 L14 44 Z" fill={a} opacity=".18"/>
        <path d="M35 24 Q39 18 45 17 Q51 18 55 24" fill={a} opacity=".3"/>
        <rect x="38" y="44" width="14" height="20" rx="2" fill={a} opacity=".15"/>
        <circle cx="45" cy="30" r="5" fill={a} opacity=".3"/>
      </svg>
    ),
    jersey: (
      <svg width={size} height={size} viewBox="0 0 90 90">
        <path d="M22 24 Q45 17 68 24 L74 42 L60 44 L60 72 L30 72 L30 44 L16 42 Z" fill={a} opacity=".2"/>
        <text x="45" y="62" textAnchor="middle" fontFamily="Barlow Condensed" fontSize="22" fill={a} fontWeight="800" opacity=".6">63</text>
        <path d="M36 24 L36 32 Q45 37 54 32 L54 24" fill={a} opacity=".28"/>
      </svg>
    ),
    cap: (
      <svg width={size} height={size} viewBox="0 0 90 90">
        <path d="M20 50 Q20 30 45 28 Q70 30 70 50 L70 55 L20 55 Z" fill={a} opacity=".2"/>
        <rect x="13" y="53" width="64" height="9" rx="2" fill={a} opacity=".28"/>
        <line x1="45" y1="28" x2="45" y2="53" stroke={a} strokeWidth="1.5" opacity=".4"/>
        <circle cx="45" cy="40" r="5" fill={a} opacity=".45"/>
      </svg>
    ),
    mug: (
      <svg width={size} height={size} viewBox="0 0 90 90">
        <rect x="24" y="28" width="38" height="40" rx="3" fill={a} opacity=".16"/>
        <path d="M62 35 Q76 35 76 50 Q76 65 62 65" stroke={a} strokeWidth="3" fill="none" opacity=".38"/>
        <text x="43" y="52" textAnchor="middle" fontFamily="Barlow Condensed" fontSize="12" fill={a} fontWeight="800" opacity=".7">★</text>
        <rect x="24" y="28" width="38" height="7" rx="2" fill={a} opacity=".2"/>
      </svg>
    ),
    keyring: (
      <svg width={size} height={size} viewBox="0 0 90 90">
        <circle cx="45" cy="34" r="14" fill={a} opacity=".18"/>
        <circle cx="45" cy="34" r="8" fill={a} opacity=".28"/>
        <path d="M45 48 L45 70" stroke={a} strokeWidth="4" strokeLinecap="round" opacity=".35"/>
        <ellipse cx="45" cy="70" rx="6" ry="4" fill={a} opacity=".25"/>
        <text x="45" y="37" textAnchor="middle" fontFamily="Barlow Condensed" fontSize="7" fill={a} fontWeight="800">W16</text>
      </svg>
    ),
    car: (
      <svg width={size} height={size} viewBox="0 0 90 90">
        <ellipse cx="45" cy="66" rx="32" ry="6" fill={a} opacity=".1"/>
        <path d="M16 60 Q18 42 30 37 L40 33 Q45 31 50 33 L60 37 Q72 42 74 56 L74 62 Z" fill={a} opacity=".2"/>
        <path d="M40 33 Q42 25 45 24 Q48 25 50 33" fill={a} opacity=".28"/>
        <ellipse cx="26" cy="61" rx="9" ry="6" fill="#0a0a0a"/>
        <ellipse cx="26" cy="61" rx="5" ry="4" fill={a} opacity=".4"/>
        <ellipse cx="64" cy="61" rx="9" ry="6" fill="#0a0a0a"/>
        <ellipse cx="64" cy="61" rx="5" ry="4" fill={a} opacity=".4"/>
        <rect x="38" y="35" width="14" height="5" rx="1" fill={a} opacity=".5"/>
      </svg>
    ),
    stickers: (
      <svg width={size} height={size} viewBox="0 0 90 90">
        <rect x="20" y="30" width="30" height="22" rx="3" fill={a} opacity=".18" transform="rotate(-8 35 41)"/>
        <rect x="38" y="36" width="30" height="22" rx="3" fill={a} opacity=".15" transform="rotate(5 53 47)"/>
        <text x="35" y="44" textAnchor="middle" fontFamily="Barlow Condensed" fontSize="9" fill={a} fontWeight="800" opacity=".7" transform="rotate(-8 35 41)">★ AMG</text>
      </svg>
    ),
    scarf: (
      <svg width={size} height={size} viewBox="0 0 90 90">
        <path d="M20 38 Q45 30 70 38 L72 50 Q45 58 18 50 Z" fill={a} opacity=".2"/>
        <path d="M60 50 L65 72" stroke={a} strokeWidth="8" strokeLinecap="round" opacity=".2"/>
        <line x1="20" y1="44" x2="70" y2="44" stroke={a} strokeWidth="1" strokeDasharray="4 3" opacity=".4"/>
      </svg>
    ),
  };
  return icons[icon] || icons.stickers;
}
