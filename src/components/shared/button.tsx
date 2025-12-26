type buttonType = {
	childern: React.ReactNode;
	className?: string;
	onclick?: () => void;
};

export default function Button({
	onclick,
	childern,
	className,
	...rest
}: buttonType) {
	return (
		<div>
			<button
				className={`  text-white bg-[#008292] w-5 ${className ?? ""}`}
				{...rest}
				onClick={onclick}
			>
				{childern}
			</button>
		</div>
	);
}
