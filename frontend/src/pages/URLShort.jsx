import { useState } from 'react'
import axios from 'axios'

export default function URLShort() {
    const [originalUrl, setOriginalUrl] = useState('')
    const [shortUrl, setShortUrl] = useState('')
    const [error, setError] = useState('')

    const handleShorten = async () => {
        setError('')
        try {
            const response = await axios.post('https://devveb-tools.onrender.com/urlshrtn/shrnk', {
                originalUrl: originalUrl,
            })
            setShortUrl(response.data.shortUrl || '')
        } catch (err) {
            setError('URL 단축에 실패했습니다.')
            console.error(err)
        }
    }

    return (
        <div className="p-8 max-w-xl mx-auto">
            <h1 className="text-2xl font-semibold mb-4">🔗 URL 단축기</h1>
            <input
                type="text"
                placeholder="원본 URL을 입력하세요"
                value={originalUrl}
                onChange={(e) => setOriginalUrl(e.target.value)}
                className="w-full px-4 py-2 border rounded mb-4"
            />
            <button
                onClick={handleShorten}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
                단축하기
            </button>

            {shortUrl && (
                <div className="mt-4">
                    <p className="text-green-700 font-medium">단축된 URL:</p>
                    <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                        {shortUrl}
                    </a>
                </div>
            )}

            {error && <p className="text-red-600 mt-2">{error}</p>}
        </div>
    )
}
