export default function ContactMap() {
    return (
        <div className="h-64 sm:h-80 w-full rounded-3xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
                title="GİMRE Lokasyon"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.620023478952!2d32.85304101564024!3d39.92742919320295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34faceba7696b%3A0xc3b0928a3852cd87!2sAnkara%20%C3%9Cniversitesi%20%C4%B0bn-i%20Sina%20Hastanesi!5e0!3m2!1str!2str!4v1680000000000!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}