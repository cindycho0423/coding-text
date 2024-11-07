function solution(genres, plays) {
  const genreMap = new Map();
  const playList = genres.map((genre, index) => ({
    genre,
    plays: plays[index],
    index,
  }));

  // 장르별 총 재생 횟수 계산
  for (let i = 0; i < genres.length; i++) {
    genreMap.set(genres[i], (genreMap.get(genres[i]) || 0) + plays[i]);
  }

  // 장르를 재생 횟수 기준으로 정렬
  const sortedGenres = [...genreMap.entries()].sort((a, b) => b[1] - a[1]).map(([genre]) => genre);

  const answer = [];

  // 각 장르별로 노래 선택
  for (const genre of sortedGenres) {
    const songs = playList.filter(song => song.genre === genre).sort((a, b) => b.plays - a.plays || a.index - b.index);

    answer.push(songs[0].index);
    if (songs.length > 1) {
      answer.push(songs[1].index);
    }
  }

  return answer;
}

console.log(solution(['classic', 'pop', 'classic', 'classic', 'pop'], [500, 600, 150, 800, 2500]));
