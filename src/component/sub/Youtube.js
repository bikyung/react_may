import Layout from '../common/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Popup from '../common/Popup';
function Youtube() {
	const [vids, setVids] = useState([]);
	const [open, setOpen] = useState(false);
	const [index, setIndex] = useState(0);

	const handlePopup = (index) => {
		setIndex(index);
		setOpen(true);
	};

	const fetchYoutube = () => {
		const key = 'AIzaSyC77Pd__ju0Wqx_Umc-IuW7Cn2mWi_HVsk';
		const playlist = 'PL92HST3Zi7rZ9Q6tfEX1v08RSk4ReQK2K';
		const num = 5;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;

		axios.get(url).then((json) => {
			console.log(json.data.items);
			setVids(json.data.items);
		});
	};
	useEffect(fetchYoutube, []);

	return (
		<>
			<Layout name={'Youtube'}>
				{vids.map((vid, idx) => {
					const tit = vid.snippet.title;
					const desc = vid.snippet.description;
					const date = vid.snippet.publishedAt;
					return (
						<article key={idx}>
							<h2>
								{tit.length > 20 ? tit.substr(0, 20) + '...' : tit}
							</h2>
							<div className='txt'>
								<p>
									{desc.length > 200
										? desc.substr(0, 200) + '...'
										: desc}
								</p>
								<span>{date.split('T')[0]}</span>
							</div>
							<div
								className='pic'
								onClick={() => {
									handlePopup(idx);
								}}>
								<img
									src={vid.snippet.thumbnails.standard.url}
									alt={vid.snippet.title}
								/>
							</div>
						</article>
					);
				})}
			</Layout>
			{open && (
				<Popup setOpen={setOpen}>
					<iframe
						src={`https://www.youtube.com/embed/${vids[index].snippet.resourceId.videoId}`}
						frameBorder='0'></iframe>
				</Popup>
			)}
		</>
	);
}

export default Youtube;
