import doctorImage from '../assets/images/doctor.JPEG';

interface DoctorImageProps {
  mobileOnly?: boolean;
  desktopOnly?: boolean;
}

export default function DoctorImage({ mobileOnly, desktopOnly }: DoctorImageProps) {
  return (
    <div
      className={`
        relative
        ${mobileOnly ? "block lg:hidden" : ""}
        ${desktopOnly ? "hidden lg:block" : ""}
      `}
    >
      <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
        <img
          src={doctorImage}
          alt="Dr. Ram Pawar"
          className="w-full h-full object-cover"
        />
      </div>
       <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-[2rem] shadow-xl border border-zinc-100 hidden lg:block">
        <p className="text-2xl font-bold text-zinc-900">
          Dr. Ram Pawar
        </p>
      </div>
    </div>
  );
}